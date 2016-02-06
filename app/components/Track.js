import React from 'react';
import moment from 'moment';

import { TrackType } from '../types';

import styles from '../styles/Track.css';

const Track = ({ track }) => ((
  <li
      key={track.epoch + track.name}
      className={styles.track}>
    <div className={styles.trackName}>
      <a href={track.url}>{track.name}</a>
    </div>
    <div className={styles.trackDetails}>
      {track.artist.name} — {track.album.name}
    </div>
  </li>
));

Track.propTypes = {
  track: TrackType,
};

export default Track;
