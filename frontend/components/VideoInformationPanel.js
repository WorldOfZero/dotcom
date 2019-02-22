import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { Grid } from '@material-ui/core';
import Measure from 'react-measure'
import Markdown from 'react-markdown'
import CodeBlock from '../renderers/CodeBlock'
import YouTube from 'react-youtube'
import { connect } from 'react-redux';
import { loadVideos } from '../store';

const mdx = `
# Lets Make Voxel Terrain

Dot Products are a really easy and fun way to compare Vectors in space. When comparing two normalized with a dot product the result will be the cosine of the angle between the two Vectors. This means that for normalized Vectors the results will be:

| Alignment    | Result |
| ------------------- | ----------- |
| Parallel         | 1           |
| Anti-Parallel | -1         |
| Orthogonal   | 0          |

Taking the ArcCosine of these values will return the angle between the two Vectors (Note that Unity uses radians for most calculations so you may need to convert to degrees yourself).

Lets explore some applications of Dot Products and show off how to take advantage of them in your games or other projects. For example, how can you detect if a point is inside of a cone? Perhaps as a way to check if an enemy AI can see the player or another reason. A second example may be detecting the difference in orientation between joysticks and a vehicles orientation to detect if a turn or thrust is the appropriate action to perform when moving.

The formula for dot products is the sum of the product of each axis. For example the dot product of two vectors A and B would be:

* In 2D space: \`(A.x * B.x) + (A.y * B.y)\`
* In 3D space: \`(A.x * B.x) + (A.y * B.y) + (A.z * B.z)\`
* In 4D space: \`(A.x * B.x) + (A.y * B.y) + (A.z * B.z) + (A.w * B.w)\`
* This formula can be expanded as the dimensions continues to increase if you need it to.

> Note: Because of this formula the length of the Vectors being compared in the dot product *does* matter!

***

Another, similar application of dot products but in shader form in our revealing flashlight shader: https://youtu.be/b4utgRuIekk

Github Link: Coming Soon!

Join the World of Zero Discord server: https://discord.gg/hU5Kq2u

\`\`\`csharp
void Test(string arg, int i)
{
  Console.WriteLine("Hello World");
}
\`\`\`

You can browse the code from this video on GitHub: https://github.com/WorldOfZero/UnityV...

Come Join the World of Zero Discord: https://discord.gg/hU5Kq2u
`;

const styles = theme => ({
  markdownDescription: {
    marginLeft: '16px',
    marginRight: '16px',
    paddingRight: '0px',
    overflowY: 'auto',
    [theme.breakpoints.up('md')]: {
      overflowY: 'scroll',
      marginLeft: '8px',
      marginRight: '0px',
      paddingRight: '8px'
    },
  },
  videoGrid: {
    marginBottom: '-4px'
  }
});

class VideoInformationPanel extends React.Component {

  aspectRatio = 16.0/9.0;

  constructor(props) {
    super(props);
    this.state = {
      height: 360
    };
  }

  render() {
    const { classes, width, videoId, videos } = this.props;
    const { height } = this.state;

    const opts = {
      width: '100%',
      height: height
    };

    let targetVideo = '';
    if (videoId !== undefined) {
      targetVideo = videoId;
    } else if (videos.length > 0) {
      targetVideo = videos[0].id;
    }

    const selectedVideo = videos.find((video) => video.id == targetVideo);
    let mdx = '';
    if (selectedVideo !== undefined) {
      mdx = `# ${selectedVideo.title}\n\n${selectedVideo.description}`;
    }

    return (
      <Grid container className={classes.videoGrid}>
      
        <Grid item md={7} xs={12}>
        <Measure
          bounds
          onResize={contentRect => {
            // Because of the -4 px margin we need to subtract 4 from the calculated height.
            this.setState({height: (contentRect.bounds.width / this.aspectRatio) - 4});
          }}
          >
          {({ measureRef }) => (
            <div ref={measureRef} style={{ width: '100%' }}>
              <YouTube videoId={targetVideo} opts={opts}/>
            </div>
          )}
          </Measure>
        </Grid>
        {/* Justify the markdown description. */}
        <Grid style={{ textAlign: 'justify' }} item md={5} xs={12}>
          <div style={{height: isWidthUp('md', width) ? height : '100%'}} className={classes.markdownDescription}>
            <Markdown renderers={{code: CodeBlock}} source={mdx}/>
          </div>
        </Grid>
      </Grid>
    )
  }
}

function mapStateToProps (state) {
  const { videos } = state;
  return { videos };
}

export default connect(mapStateToProps)(withWidth()(withStyles(styles)(VideoInformationPanel)));