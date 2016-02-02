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
  return `http://ws.audioscrobbler.com/2.0/?method=user.getfriends&user=${username}&api_key=${LAST_FM_API_KEY}&format=json&recentTracks=1`
}

export const fetchFriends = function(username) {
  return function(dispatch) {
    return fetch(friendsUrl(username))
      .then(res => res.json())
      .then(json => {
        json.friends.user.forEach((user) => {
          if (user.recenttrack === undefined) {
            user.tracks = [];
          } else {
            user.tracks = [parseLatestTrack(user.recenttrack)];
          }
        });
        dispatch(recieveFriends(username, json.friends.user));
      });
  };
};
