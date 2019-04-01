using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

using Google.Apis.Auth.OAuth2;
using Google.Apis.Services;
using Google.Apis.Upload;
using Google.Apis.Util.Store;
using Google.Apis.YouTube.v3;
using Google.Apis.YouTube.v3.Data;

using WorldOfZero.Services.YouTube.Models;

namespace WorldOfZero.Services.YouTube.Actions
{
  public class DetailsAction
  {
    public async Task<IEnumerable<PlaylistItem>> Run()
    {
      var youtubeService = new YouTubeService(new BaseClientService.Initializer()
      {
        ApiKey = Environment.GetEnvironmentVariable("YOUTUBE_API_KEY"),
        ApplicationName = this.GetType().ToString()
      });

      var channelsListRequest = youtubeService.Channels.List("contentDetails");
      channelsListRequest.Id="UCJKLCjeujQj-d3JjsbVtkJw";

      // Retrieve the contentDetails part of the channel resource for the authenticated user's channel.
      var channelsListResponse = await channelsListRequest.ExecuteAsync();

      var discoveredPlaylists = new List<PlaylistItem>();
      foreach (var channel in channelsListResponse.Items)
      {
        // From the API response, extract the playlist ID that identifies the list
        // of videos uploaded to the authenticated user's channel.
        var uploadsListId = channel.ContentDetails.RelatedPlaylists.Uploads;

        Console.WriteLine("Videos in list {0}", uploadsListId);

        var nextPageToken = "";
        while (nextPageToken != null)
        {
          nextPageToken = await FetchPartialPlaylistVideos(youtubeService, discoveredPlaylists, uploadsListId, nextPageToken);
        }
      }
      return discoveredPlaylists;
    }

    private static async Task<string> FetchPartialPlaylistVideos(YouTubeService youtubeService, List<PlaylistItem> discovered, string uploadsListId, string nextPageToken)
    {
      var playlistItemsListRequest = youtubeService.PlaylistItems.List("snippet");
      playlistItemsListRequest.PlaylistId = uploadsListId;
      playlistItemsListRequest.MaxResults = 50;
      playlistItemsListRequest.PageToken = nextPageToken;

      // Retrieve the list of videos uploaded to the authenticated user's channel.
      var playlistItemsListResponse = await playlistItemsListRequest.ExecuteAsync();

      foreach (var playlistItem in playlistItemsListResponse.Items)
      {
        // Print information about each video.
        Console.WriteLine("{0} ({1})", playlistItem.Snippet.Title, playlistItem.Snippet.ResourceId.VideoId);
        discovered.Add(playlistItem);
      }

      nextPageToken = playlistItemsListResponse.NextPageToken;
      return nextPageToken;
    }
  }
}
