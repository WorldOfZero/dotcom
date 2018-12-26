import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { Grid } from '@material-ui/core';
import Measure from 'react-measure'
import Markdown from 'react-markdown'
import CodeBlock from '../renderers/CodeBlock'
import YouTube from 'react-youtube'

const mdx = `
# Lets Make Voxel Terrain

Lets build a basic colored voxel "chunk" from start to finish! We'll focus on constructing three main components: a Chunk which stores data about the world, A ChunkGenerator which fills the Chunk with initial information (it builds the world) and a MeshGenerator that converts our Chunk into a Mesh you can see. This isn't necessarily an efficient implementation (actually, I can assure you it is not) but hopefully we can set up a strong foundation to build and expand from into really cool new problems. By separating the generation of our Chunk from the generation of the Mesh we can modify either the Mesh or World generation independently with minimal overhead making expanding and adding onto this foundation simple.

There is still a **LOT** that is not in this implementation. Half of our triangles are generated with the wrong Vertex winding causing them to appear backwards, we have no normals configured so lighting doesn't really work either. There is also a pretty significant mistake where we regenerate our mesh once for every single cell in the Chunk. For a simple 10x10x10 cube that will result in 1000 mesh generations even though we just need 1. My bad! We'll fix that in the next video in this series.

There are a lot of places we can take this, if you have any ideas or suggestions let me know or take the code your own path. Let me know in the comments or join our Discord to walk through any problems you run into.

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
    const { classes, width, videoId } = this.props;
    const { height } = this.state;

    const opts = {
      width: '100%',
      height: height
    };

    var video = videoId === undefined ? '_08No6ET-qk' : videoId;

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
              <YouTube videoId={video} opts={opts}/>
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

export default withWidth()(withStyles(styles)(VideoInformationPanel));