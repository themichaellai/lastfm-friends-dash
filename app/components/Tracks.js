import React from 'react';

import { TrackType } from '../types';

import Track from './Track';

import styles from '../styles/Tracks.css';

const Tracks = ({tracks}) => {
  const trackEls = tracks.slice(0, 20).map((t) => (
    <Track
      key={t.epoch + t.name}
      track={t} />
  ));
  return (
    <ul className={styles.tracks}>
      {trackEls}
    </ul>
  );
};

Tracks.propTypes = {
  tracks: React.PropTypes.arrayOf(TrackType).isRequired,
};

export default Tracks;
