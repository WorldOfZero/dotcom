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

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
});

class Index extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            World of Zero
          </Toolbar>
        </AppBar>
        <VideoInformationPanel/>
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