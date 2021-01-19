using Google.Apis.Services;
using Google.Apis.YouTube.v3;
using Google.Apis.YouTube.v3.Data;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorldOfZero.DotCom.Generator.VideoExporter
{
    class VideoDataService
    {
        private YouTubeService youtubeService;

        public VideoDataService(string appname, string apiKey)
        {
            youtubeService = new YouTubeService(new BaseClientService.Initializer()
            {
                ApiKey = apiKey,
                ApplicationName = appname
            });
        }

        public async Task<IEnumerable<Video>> GetAll(string channelId)
        {
            var channelsListRequest = youtubeService.Channels.List("contentDetails");
            channelsListRequest.Id = channelId;

            // Retrieve the contentDetails part of the channel resource for the authenticated user's channel.
            var channelsListResponse = await channelsListRequest.ExecuteAsync();

            var discoveredPlaylists = new List<Video>();
            foreach (var channel in channelsListResponse.Items)
            {
                // From the API response, extract the playlist ID that identifies the list
                // of videos uploaded to the authenticated user's channel.
                var uploadsListId = channel.ContentDetails.RelatedPlaylists.Uploads;

                var nextPageToken = "";
                do
                {
                    nextPageToken = await FetchPartialPlaylistVideos(youtubeService, discoveredPlaylists, uploadsListId, nextPageToken);
                    Log.Information($"Completed page, current entries {discoveredPlaylists.Count}");
                } while (nextPageToken != null);
            }
            return discoveredPlaylists;
        }

        private async Task<string> FetchPartialPlaylistVideos(YouTubeService youtubeService, List<Video> discovered, string uploadsListId, string nextPageToken)
        {
            var playlistItemsListRequest = youtubeService.PlaylistItems.List("contentDetails");
            playlistItemsListRequest.PlaylistId = uploadsListId;
            playlistItemsListRequest.MaxResults = 50;
            playlistItemsListRequest.PageToken = nextPageToken;

            // Retrieve the list of videos uploaded to the authenticated user's channel.
            var playlistItemsListResponse = await playlistItemsListRequest.ExecuteAsync();

            foreach (var playlistItem in playlistItemsListResponse.Items)
            {
                var vidTask = youtubeService.Videos.List("snippet,contentDetails");
                vidTask.Id = playlistItem.ContentDetails.VideoId;
                var videoList = await vidTask.ExecuteAsync();
                foreach(var video in videoList.Items) {
                    Log.Debug($"Found playlist item: {video.Id} - {video.Snippet.Title} - {video.Snippet.Tags.Count} tags");
                    // Quote tags to prevent errors in yaml encoding
                    video.Snippet.Tags = video.Snippet.Tags.Select(t => $"\"{t}\"").ToList();
                    discovered.Add(video);
                }
            }

            nextPageToken = playlistItemsListResponse.NextPageToken;
            return nextPageToken;
        }
    }
}
