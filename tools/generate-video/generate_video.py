import jinja2
import argparse
import datetime
import os
import logging
import re

import google_auth_oauthlib.flow
import googleapiclient.discovery
import googleapiclient.errors

scopes = ["https://www.googleapis.com/auth/youtube.readonly"]

class Video:
  id = 'abcd1234'
  title = "Testing"
  publishedOn = datetime.datetime.now()
  tags = ['unity','shader']
  description = "A description"
  thumbnail = "posts/powershell/default.jpg"

def get_videos(template, outpath):
  os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

  api_service_name = "youtube"
  api_version = "v3"
  client_secrets_file = "youtube_secrets.json"

  # Get credentials and create an API client
  flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(
      client_secrets_file, scopes)
  credentials = flow.run_console()
  youtube = googleapiclient.discovery.build(
      api_service_name, api_version, credentials=credentials)

  channelId = "UUJKLCjeujQj-d3JjsbVtkJw"

  # request = youtube.channels().list(
  #   part="snippet,contentDetails,statistics",
  #   id="UCJKLCjeujQj-d3JjsbVtkJw"
  # )
  # response = request.execute()

  # logger.debug("Retrieved channel details", response)

  request = youtube.playlistItems().list(
    part="snippet",
    playlistId=channelId,
    maxResults = 50
  )
  response = request.execute()
  for video in response["items"]:
    tempValue = Video()
    tempValue.id = video["snippet"]["resourceId"]["videoId"]
    tempValue.title = video["snippet"]["title"]
    tempValue.publishedOn = video["snippet"]["publishedAt"]
    tempValue.description = video["snippet"]["description"]
    tempValue.thumbnail = video["snippet"]["thumbnails"]["medium"]["url"]

    request = youtube.videos().list(
      part="snippet",
      id=tempValue.id
    )

    response = request.execute()
    tempValue.tags = response["items"][0]["snippet"]["tags"]

    logging.debug("created video", video)
    store_video(tempValue, template, outpath)

  #print(response)

def generate_videos(outpath, template_path):
  # Print out basic information about the job being run
  print("Begin generating video content")
  print(f"\tat {datetime.datetime.now(datetime.timezone.utc)}")
  print(f"\tOutput directory: {outpath}")
  print(f"\tTemplate file: {template_path}")
  print("Template contents:")
  file = open(template_path, "r")
  logging.debug("reading template file")
  lines = file.readlines()
  temp_string = u''
  for line in lines:
    print("\t| " + line.replace('\n', ''))

    temp_string += line

  logging.debug("Generated template string: ", temp_string)

  env = jinja2.Environment(
    
  )

  template = env.from_string(temp_string)
  get_videos(template, outpath)

def gen_video(video, template):
  #temp = jinja2.Template(template)
  return template.render(
    video=video
  )

def store_video(video, template, outpath):
  try:
    shortname = gen_shortname(video.title)
    path = os.path.join(outpath, f"{shortname}.md")
    output = open(path, 'w', encoding="utf8")
    logging.info(f"Saving video {video.id} to {path}")
    generated = gen_video(video, template)
    output.write(generated)
    output.close()
  except Exception as e:
    logging.warning(f"Error storing {video.id} ({video.title})", e)

def gen_shortname(name):
  name = re.sub('[^0-9a-zA-Z ]+', '', name)
  name = name.replace(" ", "-")
  name = name.lower()
  return name

if __name__ == "__main__":
  parser = argparse.ArgumentParser(description='Process and output videos for Hugo')
  parser.add_argument('--output', dest='output',
                    help='Store generated files as children of this directory')
  parser.add_argument('--template', dest='template',
                    help='The template file to inject video files into')
  parser.add_argument('--log', dest='loglevel', default="WARN",
                    help='The level of details to include in logs',
                    choices=['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'])

  args = parser.parse_args()

  # Configure Logging
  numeric_level = getattr(logging, args.loglevel.upper(), None)
  if not isinstance(numeric_level, int):
      raise ValueError('Invalid log level: %s' % args.loglevel)
  logging.basicConfig(
    level=numeric_level,
    format='%(asctime)s - %(levelname)s - (%(filename)s:%(lineno)d) %(message)s')
  logging.debug("configured logging")

  # Begin video generation
  generate_videos(args.output, args.template)