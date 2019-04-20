import { Grid } from '@material-ui/core';

export default class LanguageBar extends React.Component {

  render() {
    const { color, name, link } = this.props;

    return (
      <div style={{ background: color, paddingLeft: '0.5em', paddingRight: '0.5em' }}>
        <Grid container>
          <Grid style={{ textAlign: 'left' }} item xs={6}>
            <strong>{ name }</strong>
          </Grid>
          <Grid style={{ textAlign: 'right' }} item xs={6}>
            <a href={link} target="_blank" style={{ color: '#FFFFFF' }}>Explore This Language</a>
          </Grid>
        </Grid>
      </div>
    )
  }
}