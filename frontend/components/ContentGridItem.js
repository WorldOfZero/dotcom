import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const styles = theme => ({
  button: {
    width: '100%',
    height: '100%',
    fontWeight: 600,
    color: 'rgba(1,1,1,0)',
    '&:hover': {
      color: '#fff',
    },
    transition: theme.transitions.create('color'),
  },
  title: {
    borderBottom: '3px solid'
  }
});

class ContentGridItem extends React.Component {
  static defaultProps = {
    title: "",
    img: "https://i.ytimg.com/vi/-vGNd8pnbYs/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDrxBXxX_aCjt3NHamrr890qAdgqQ"
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { classes, img, title } = this.props;

    return (
      <Button 
        className={classes.button}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover'
        }}
        color="default"
        variant="outlined">
        <div className={classes.title}>{title}</div>
      </Button>
    )
  }
}

export default withStyles(styles)(ContentGridItem);