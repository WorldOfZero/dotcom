import jinja2
import argparse
import datetime
import logging

class Video:
  id = 'abcd1234'
  title = "Testing"
  publishedOn = "2019.01.20"
  tags = ['testing','some','tags']
  description = "A description"

def generate_videos(outpath, template):
  # Print out basic information about the job being run
  print("Begin generating video content")
  print(f"\tat {datetime.datetime.now(datetime.timezone.utc)}")
  print(f"\tOutput directory: {outpath}")
  print(f"\tTemplate file: {template}")
  print("Template contents:")
  file = open(template, "r")
  logging.debug("reading template file")
  lines = file.readlines()
  template_str = ''
  for line in lines:
    print("\t| " + line.replace('\n', ''))
    template_str += line
  # It's possible for a bug to cause the displayed template and the stored template str to differ
  # When debugging print out the internal template_str to confirm its correct
  logging.debug(f"Template String Generated: \n\n{template_str}")

  print(gen_video(template_str))

def gen_video(template):
  temp = jinja2.Template(template)
  return temp.render(
    video=Video()
  )

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