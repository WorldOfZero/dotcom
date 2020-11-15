using Google.Apis.Services;
using Google.Apis.YouTube.v3;
using Google.Apis.YouTube.v3.Data;
using Serilog;
using System;
using System.Collections.Generic;
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

        public async Task<IEnumerable<PlaylistItem>> GetAll(string channelId)
        {
            var channelsListRequest = youtubeService.Channels.List("contentDetails");
            channelsListRequest.Id = channelId;

            // Retrieve the contentDetails part of the channel resource for the authenticated user's channel.
            var channelsListResponse = await channelsListRequest.ExecuteAsync();

            var discoveredPlaylists = new List<PlaylistItem>();
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

        private async Task<string> FetchPartialPlaylistVideos(YouTubeService youtubeService, List<PlaylistItem> discovered, string uploadsListId, string nextPageToken)
        {
            var playlistItemsListRequest = youtubeService.PlaylistItems.List("contentDetails,snippet");
            playlistItemsListRequest.PlaylistId = uploadsListId;
            playlistItemsListRequest.MaxResults = 50;
            playlistItemsListRequest.PageToken = nextPageToken;

            // Retrieve the list of videos uploaded to the authenticated user's channel.
            var playlistItemsListResponse = await playlistItemsListRequest.ExecuteAsync();

            foreach (var playlistItem in playlistItemsListResponse.Items)
            {
                Log.Debug($"Found playlist item: {playlistItem.Snippet.ResourceId.VideoId} - {playlistItem.Snippet.Title}");
                discovered.Add(playlistItem);
            }

            nextPageToken = playlistItemsListResponse.NextPageToken;
            return nextPageToken;
        }
    }
}
