import React from 'react';
import { TrackType } from '../types';

import styles from '../styles/Tracks.css';

const Tracks = (props) => {
  const trackEls = props.tracks.map((t) => (
    <li>
      <a href={t.url}>{t.artist.name} - {t.name}</a>
    </li>
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
