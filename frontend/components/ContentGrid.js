import { GridList, GridListTile } from '@material-ui/core';
import ContentGridItem from './ContentGridItem';
import Measure from 'react-measure'

export default class ContentGrid extends React.Component {
  static defaultProps = {
    columnWidthGoal: 320,
    aspectRatio: 16.0/9.0
  }

  constructor(props) {
    super(props);
    this.state = {
      columns: 6,
      rowHeight: 160
    };
  }

  matchHeightToRatio(width, aspectRatio) {
    var resultColumns = Math.max(Math.ceil(width / this.props.columnWidthGoal), 2);
    var height = (width / resultColumns) / aspectRatio;
    this.setState({ columns: resultColumns, rowHeight: height })
  }

  render() {
    let { rowHeight, columns } = this.state;

    let samples = [
      {
        id: "1",
        title: "Building a Custom Node in Unity's Shader Graph",
        img: "https://i.ytimg.com/vi/FeL4uWGdtUY/hqdefault.jpg"
      },
      {
        id: "2",
        title: "Using Properties and Steps in Part 2 of our Ripple in Shader Graph",
        img: "https://i.ytimg.com/vi/tL3GbBAqF3E/hqdefault.jpg"
      },
      {
        id: "3",
        title: "Creating and Using SSH RSA Tokens on Windows 10",
        img: "https://i.ytimg.com/vi/gM2J2DWCTnM/hqdefault.jpg"
      },
      {
        id: "4",
        title: "Learning to Use Step and Smoothstep in Shaders",
        img: "https://i.ytimg.com/vi/-vGNd8pnbYs/hqdefault.jpg"
      },
      {
        id: "5",
        title: "Point and Ripple - Ripple Shader - Part 2",
        img: "https://i.ytimg.com/vi/UVdXUXv3Bw8/hqdefault.jpg"
      },
      {
        id: "6",
        title: "Live Coding a 3D Voxel Cube in Unity",
        img: "https://i.ytimg.com/vi/laBPpyXfBWo/hqdefault.jpg"
      }
    ]

    var videos = [];
    for(var i = 0; i < 100; ++i) {
      for(var n = 0; n < samples.length; ++n) {
        videos.push(samples[n]);
      }
    }

    return (
      <Measure
        bounds
        onResize={contentRect => {
          this.matchHeightToRatio(contentRect.bounds.width, this.props.aspectRatio);
        }}
        >
        {({ measureRef }) => (
          <div style={{ margin: '4px' }} ref={measureRef}>
            <GridList cellHeight={rowHeight} cols={columns}>
              {
                videos.map((item) => <GridListTile key={item.id}><ContentGridItem title={item.title} img={item.img}/></GridListTile>)
              }
            </GridList>
          </div>
        )}
      </Measure>
    )
  }
}