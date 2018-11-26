import { Button, GridList, GridListTile } from '@material-ui/core';
import ContentGridItem from './ContentGridItem';

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
      <GridList cellHeight={rowHeight} cols={6}>
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
        <GridListTile><ContentGridItem /></GridListTile>
        <GridListTile><ContentGridItem /></GridListTile>
        <GridListTile><ContentGridItem /></GridListTile>
      </GridList>
    )
  }
}