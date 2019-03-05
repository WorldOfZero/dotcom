import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { Grid } from '@material-ui/core';
import Measure from 'react-measure'
import Markdown from 'react-markdown'
import CodeBlock from '../renderers/CodeBlock'
import YouTube from 'react-youtube'
import { connect } from 'react-redux';

const styles = theme => ({
  markdownDescription: {
    marginLeft: '16px',
    marginRight: '16px',
    paddingRight: '0px',
    overflowY: 'auto',
    [theme.breakpoints.up('md')]: {
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