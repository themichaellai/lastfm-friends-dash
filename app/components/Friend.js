import React from 'react';
import _ from 'underscore';

import styles from '../styles/Friend.css';

const Friend = ({friend}) => {
  let trackEl = null;
  if (friend.tracks.length > 0) {
    const track = _.first(friend.tracks)
    trackEl = (
      <div className={styles.friendMostRecentTrack}>
        {track.name} by {track.artist.name}
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
