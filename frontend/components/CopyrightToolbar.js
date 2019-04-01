import { Grid, Toolbar } from '@material-ui/core';
import GitHubIcon from './GitHubIcon';

export default class CopyrightToolbar extends React.Component {

  render() {
    return (
      <Toolbar>
        <Grid container>
          <Grid style={{ textAlign: 'left' }} item sm={5} xs={12}>
            © Copyright - Sam Wronski
          </Grid>
          <Grid style={{ textAlign: 'right' }} item sm={6} xs={12}>
            <div><strong>Lets Make Something Awesome, Together!</strong></div>
            <div>The source for this site is available on <a href='https://github.com/WorldOfZero/dotcom' style={{color: '#FFF'}}>GitHub</a> </div>
          </Grid>
          <Grid style={{ textAlign: 'left' }} item sm={1} xs={12}>
            <a href='https://github.com/WorldOfZero/dotcom'><GitHubIcon/></a>
          </Grid>
        </Grid>
      </Toolbar>
    )
  }
}