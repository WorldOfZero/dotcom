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
            Header
          </Toolbar>
        </AppBar>
        <VideoInformationPanel/>
        <AppBar position="static">
          <Toolbar>
            Social Bar
          </Toolbar>
        </AppBar> 
        <ContentGrid/>
        <AppBar position="static">
          <Toolbar>
            © Copyright - Sam Wronski
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);