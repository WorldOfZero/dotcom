import { GridList, GridListTile } from '@material-ui/core';
import ContentGridItem from './ContentGridItem';
import Measure from 'react-measure'

export default class ContentGrid extends React.Component {
  static defaultProps = {
    rowHeight: 160,
    aspectRatio: 16.0/9
  }

  constructor(props) {
    super(props);
  }

  render() {
    let rowHeight = this.props.rowHeight;

    return (
      <Measure
        bounds
        onResize={contentRect => {
          console.log(contentRect);
        }}
        >
        {({ measureRef }) => (
        <GridList cellHeight={rowHeight} cols={6}>
          <GridListTile><ContentGridItem title="Testing"/></GridListTile>
          <GridListTile><ContentGridItem title="Learning Step and Smoothstep"/></GridListTile>
          <GridListTile><ContentGridItem title="Yet another Title thing"/></GridListTile>
          <GridListTile><ContentGridItem /></GridListTile>
          <GridListTile><ContentGridItem /></GridListTile>
          <GridListTile><ContentGridItem /></GridListTile>
          <GridListTile><ContentGridItem /></GridListTile>
          <GridListTile><ContentGridItem /></GridListTile>
          <GridListTile><ContentGridItem /></GridListTile>
          <GridListTile><ContentGridItem /></GridListTile>
          <GridListTile><ContentGridItem /></GridListTile>
          <GridListTile><ContentGridItem /></GridListTile>
          <GridListTile><ContentGridItem /></GridListTile>
          <GridListTile><ContentGridItem /></GridListTile>
          <GridListTile><ContentGridItem /></GridListTile>
        </GridList>
        )}
      </Measure>
    )
  }
}