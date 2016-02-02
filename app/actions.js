import _ from 'underscore';
import { parseLatestTrack } from './types';
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

const friendsUrl = function(username) {
  return `http://ws.audioscrobbler.com/2.0/?method=user.getfriends&user=${username}&api_key=${LAST_FM_API_KEY}&format=json&recentTracks=1`;
};

export const fetchFriends = function(username) {
  return function(dispatch) {
    return fetch(friendsUrl(username))
      .then(res => res.json())
      .then(json => {
        const users = json.friends.user.map((user) => {
          let tracks;
          if (user.recenttrack === undefined) {
            tracks = [];
          } else {
            tracks = [parseLatestTrack(user.recenttrack)];
          }
          return _.extend(user, { tracks });
        });
        dispatch(recieveFriends(username, users));
      });
  };
};
