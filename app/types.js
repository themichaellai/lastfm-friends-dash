import React from 'react';

export const TrackType = React.PropTypes.shape({
  name: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  album: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
  }),
  artist: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
  }),
});

export const UserType = React.PropTypes.shape({
  name: React.PropTypes.string.isRequired,
  realname: React.PropTypes.string.isRequired,
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
  };
};
