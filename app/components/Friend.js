import React from 'react';
import _ from 'underscore';

import styles from '../styles/Friend.css';

const Friend = ({ friend }) => {
  let trackEl = null;
  if (friend.tracks.length > 0) {
    const track = _.first(friend.tracks);
    trackEl = (
      <div className={styles.friendMostRecentTrack}>
        <a href={track.url}>
          {track.name} by {track.artist.name}
        </a>
      </div>
    );
  }
  return (
    <div className={styles.friendRow}>
      <div className={styles.friendName}>
        {friend.name}
      </div>
      {trackEl}
    </div>
  );
};

Friend.propTypes = {
  friend: React.PropTypes.object.isRequired,
};

export default Friend;
