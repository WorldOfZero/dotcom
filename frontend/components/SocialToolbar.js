import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, Toolbar } from '@material-ui/core';
import DiscordIcon from '../components/DiscordIcon';
import TwitterIcon from '../components/TwitterIcon';
import YouTubeIcon from '../components/YouTubeIcon';

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
          <Grid item xs={4}>
            <Button className={classes.button} style={{ backgroundColor: '#FF0000' }}><YouTubeIcon height={48} width={48}/></Button>
          </Grid>
          <Grid item xs={4}>
            <Button className={classes.button} style={{ backgroundColor: '#38A1F3' }}><TwitterIcon height={48} width={48}/></Button>
          </Grid>
          <Grid item xs={4}>
            <Button className={classes.button} style={{ backgroundColor: '#7289DA' }}><DiscordIcon height={48} width={48}/></Button>
          </Grid>
        </Grid>
      </Toolbar>
    )
  }
}

export default withStyles(styles)(SocialToolbar);