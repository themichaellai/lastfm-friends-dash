import _ from 'underscore';
import Immutable from 'immutable';
import { parseLatestTrack, parseTrack } from './types';
import { LAST_FM_API_KEY } from './secrets';
export const GET_FRIENDS = 'GET_FRIENDS';
export const getFriends = function() {
  return {
    type: GET_FRIENDS,
  };
};

export const RECIEVE_FRIENDS = 'RECIEVE_FRIENDS';
export const recieveFriends = function(username, friends) {
  return {
    type: RECIEVE_FRIENDS,
    username,
    friends,
  };
};

export const RECIEVE_RECENT_TRACKS = 'RECIEVE_RECENT_TRACKS';
export const recieveRecentTracks = function(username, tracks) {
  return {
    type: RECIEVE_RECENT_TRACKS,
    username,
    tracks,
  };
};

const friendsUrl = function(username) {
  return `http://ws.audioscrobbler.com/2.0/?method=user.getfriends&user=${username}&api_key=${LAST_FM_API_KEY}&format=json&recentTracks=1`;
};

const recentTracksUrl = function(username) {
  return `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${LAST_FM_API_KEY}&format=json`;
};

export const fetchFriends = function(username) {
  return function(dispatch) {
    return fetch(friendsUrl(username))
      .then(res => res.json())
      .then(json => (
        json.friends.user.map((user) => {
          let tracks;
          if (user.recenttrack === undefined) {
            tracks = [];
          } else {
            tracks = [parseLatestTrack(user.recenttrack)];
          }
          return _.extend(user, { tracks });
        })
      ))
      .then(users => {
        dispatch(recieveFriends(username, Immutable.fromJS(users)));
      });
  };
};

export const fetchLatestTracks = function(username) {
  return function(dispatch) {
    return fetch(recentTracksUrl(username))
      .then(res => res.json())
      .then(json => {
        const tracks = json.recenttracks.track.map(parseTrack);
        dispatch(recieveRecentTracks(username, tracks));
      });
  };
};
