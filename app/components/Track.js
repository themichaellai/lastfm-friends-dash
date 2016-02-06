import React from 'react';
import _ from 'underscore';
import moment from 'moment';

import { TrackType } from '../types';

import styles from '../styles/Track.css';

const renderTime = (track) => {
  if (track.nowPlaying) {
    return 'now playing';
  } else if (!_.isUndefined(track.epoch)) {
    return moment(parseInt(track.epoch, 10) * 1000).fromNow();
  }
  return '';
};

const Track = ({ track }) => (
  <li
      key={track.epoch + track.name}
      className={styles.track}>
    <div className={styles.trackName}>
      <a href={track.url}>{track.name}</a>
    </div>
    <div className={styles.trackDetails}>
      {track.artist.name} — {track.album.name}
      <span className={styles.timeAgo}>{renderTime(track)}</span>
    </div>
  </li>
);

Track.propTypes = {
  track: TrackType,
};

export default Track;
