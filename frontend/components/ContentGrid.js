import { GridList, GridListTile } from '@material-ui/core';
import ContentGridItem from './ContentGridItem';
import Measure from 'react-measure';
import Link from 'next/link';
import { connect } from 'react-redux';
import { loadVideos } from '../store';
import LinearProgress from '@material-ui/core/LinearProgress';

class ContentGrid extends React.Component {
  static defaultProps = {
    videos: [],
    columnWidthGoal: 320,
    aspectRatio: 16.0/9.0
  }

  constructor(props) {
    super(props);
    this.state = {
      columns: 6,
      rowHeight: 160,
      //videos: []
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadVideos());
  }

  matchHeightToRatio(width, aspectRatio) {
    var resultColumns = Math.max(Math.ceil(width / this.props.columnWidthGoal), 2);
    var height = (width / resultColumns) / aspectRatio;
    this.setState({ columns: resultColumns, rowHeight: height })
  }

  render() {
    const { rowHeight, columns } = this.state;
    const { videos } = this.props;

    return (
      <Measure
        bounds
        onResize={contentRect => {
          this.matchHeightToRatio(contentRect.bounds.width, this.props.aspectRatio);
        }}
        >
        {({ measureRef }) => (
          <div style={{ margin: '4px' }} ref={measureRef}>
            {videos.length === 0 ? <LinearProgress variant="query" style={{margin: '12px'}}/> : '' }
            <GridList cellHeight={rowHeight} cols={columns}>
              {
                videos.map((item) => <GridListTile key={item.id}><Link href={'/?v='+item.id}><a><ContentGridItem title={item.title} img={item.img}/></a></Link></GridListTile>)
              }
            </GridList>
          </div>
        )}
      </Measure>
    )
  }
}

function mapStateToProps (state) {
  const { videos } = state;
  return { videos };
}

export default connect(mapStateToProps)(ContentGrid);