import { GridList, GridListTile } from '@material-ui/core';
import ContentGridItem from './ContentGridItem';
import Measure from 'react-measure'
import Link from 'next/link'

export default class ContentGrid extends React.Component {
  static defaultProps = {
    columnWidthGoal: 320,
    aspectRatio: 16.0/9.0
  }

  constructor(props) {
    super(props);
    this.state = {
      columns: 6,
      rowHeight: 160,
      videos: []
    };
  }

  componentDidMount() {
    fetch("https://localhost:5001/api/video").then(results => {
      return results.json();
    }).then(results => {
      console.log(results);
      const videoViews = [];
      results.videos.forEach(video => {
        videoViews.push({id: video.id, title: video.title, img: video.thumbnail});
      });
      this.setState({videos: videoViews});
    })
  }

  matchHeightToRatio(width, aspectRatio) {
    var resultColumns = Math.max(Math.ceil(width / this.props.columnWidthGoal), 2);
    var height = (width / resultColumns) / aspectRatio;
    this.setState({ columns: resultColumns, rowHeight: height })
  }

  render() {
    const { videos, rowHeight, columns } = this.state;

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
                videos.map((item) => <GridListTile key={item.id}><a href={'/?v='+item.id}><ContentGridItem title={item.title} img={item.img}/></a></GridListTile>)
              }
            </GridList>
          </div>
        )}
      </Measure>
    )
  }
}