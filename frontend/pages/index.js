import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import ContentGrid from '../components/ContentGrid'
import VideoInformationPanel from '../components/VideoInformationPanel'
import { Toolbar } from '@material-ui/core';
import CopyrightToolbar from '../components/CopyrightToolbar';
import SocialToolbar from '../components/SocialToolbar';
import WorldOfZeroLogo from '../components/WorldOfZeroLogo';

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
});

class Index extends React.Component {
  static getInitialProps ({ query: { v } }) {
    return { v }
  }

  render() {
    const { classes, v } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar style={{ margin: '16px', alignSelf: 'center' }}>
            <WorldOfZeroLogo/>
          </Toolbar>
        </AppBar>
        <VideoInformationPanel videoId={v}/>
        <AppBar position="static" color="secondary">
          <SocialToolbar/>
        </AppBar> 
        <ContentGrid/>
        <AppBar position="static">
          <CopyrightToolbar/>
        </AppBar>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);