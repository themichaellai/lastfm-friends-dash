import React from 'react';
import _ from 'underscore';

export const TrackType = React.PropTypes.shape({
  name: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  album: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
  }),
  artist: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
  }),
  epoch: React.PropTypes.string,
  nowPlaying: React.PropTypes.bool.isRequired,
});

export const UserType = React.PropTypes.shape({
  name: React.PropTypes.string.isRequired,
  realname: React.PropTypes.string,
  url: React.PropTypes.string.isRequired,
  tracks: React.PropTypes.arrayOf(TrackType).isRequired,
});

// Parses track from getUser endpoint
export const parseLatestTrack = function(track) {
  return {
    name: track.name,
    url: track.url,
    album: {
      name: track.album.name,
    },
    artist: {
      name: track.artist.name,
    },
    epoch: _.has(track, '@attr') ? track['@attr'].uts : undefined,
    nowPlaying: false,
  };
};

// Parses track from getLatestTracks endpoint
export const parseTrack = function(track) {
  return {
    name: track.name,
    url: track.url,
    album: {
      name: track.album['#text'],
    },
    artist: {
      name: track.artist['#text'],
    },
    epoch: _.has(track, 'date') ? track.date.uts : undefined,
    nowPlaying: _.has(track, '@attr') ? track['@attr'].nowplaying : false,
  };
};
