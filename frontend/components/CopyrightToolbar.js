import { Grid, Toolbar } from '@material-ui/core';

export default class CopyrightToolbar extends React.Component {

  render() {
    return (
      <Toolbar>
        <Grid container>
          <Grid style={{ textAlign: 'left' }} item sm={6} xs={12}>
            © Copyright - Sam Wronski
          </Grid>
          <Grid style={{ textAlign: 'right' }} item sm={6} xs={12}>
            Lets Make Something Awesome, Together!
          </Grid>
        </Grid>
      </Toolbar>
    )
  }
}