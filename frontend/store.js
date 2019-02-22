import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const defaultState = {
  videos: []
}

export const actionTypes = {
  LOAD: 'load'
}

// REDUCERS
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.LOAD:
      return { videos: action.videos };
    default:
      return state;
  }
}

export const loadVideos = () => dispatch => {
  fetch("https://localhost:5001/api/video").then(results => {
    return results.json();
  }).then(results => {
    console.log(results);
    const videoViews = [];
    results.videos.forEach(video => {
      videoViews.push({id: video.id, title: video.title, img: video.thumbnail, description: video.description});
    });
    return dispatch({ type: actionTypes.LOAD, videos: videoViews });
  })
}

export function initializeStore (initialState = defaultState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}