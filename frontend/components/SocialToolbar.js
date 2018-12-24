import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, Toolbar } from '@material-ui/core';

const styles = theme => ({
  button: {
    width: '100%',
    height: '64px',
    color: '#FFFFFF'
  }
});

class SocialToolbar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Toolbar>
        <Grid container>
          <Grid item md={2} sm={3} xs={4}>
            <Button className={classes.button} style={{ backgroundColor: '#ff0000' }}>YouTube</Button>
          </Grid>
          <Grid item md={2} sm={3} xs={4}>
            <Button className={classes.button} style={{ backgroundColor: '#38A1F3' }}>Twitter</Button>
          </Grid>
          <Grid item md={2} sm={3} xs={4}>
            <Button className={classes.button} style={{ backgroundColor: '#7289da' }}>Discord</Button>
          </Grid>
          <Grid item md={2} sm={3} xs={4}>
            <Button className={classes.button}>TODO</Button>
          </Grid>
        </Grid>
      </Toolbar>
    )
  }
}

export default withStyles(styles)(SocialToolbar);