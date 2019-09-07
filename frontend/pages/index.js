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
const fetch = require("node-fetch");

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
});

class Index extends React.Component {
  // Fetch the list of videos and return the results.
  static async loadVideos() {
    var results = await fetch("http://woz-server/api/video");
    var json = await results.json();

    console.log("Found videos: " + json.videos.length);
    const videoViews = [];
    json.videos.forEach(video => {
      videoViews.push({id: video.id, title: video.title, img: video.thumbnail, description: video.description});
    });
    return videoViews;
  }

  static async getInitialProps ({ query: { v } }) {
    var videos = await this.loadVideos();
    return { v, videos }
  }

  render() {
    const { classes, v, videos } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar style={{ margin: '16px', alignSelf: 'center' }}>
            <WorldOfZeroLogo/>
          </Toolbar>
        </AppBar>
        <VideoInformationPanel videoId={v} videos={videos}/>
        <AppBar position="static" color="secondary">
          <SocialToolbar/>
        </AppBar> 
        <ContentGrid videos={videos}/>
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