import React from 'react';
import _ from 'underscore';

import styles from '../styles/Friend.css';

const Friend = React.createClass({
  propTypes: {
    friend: React.PropTypes.object.isRequired,
    handleFriendClick: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      handleFriendClick: _.identity,
    };
  },

  handleFriendClick() {
    this.props.handleFriendClick(this.props.friend.name);
  },

  render() {
    const { friend } = this.props;
    const tracks = friend.tracks;
    let trackEl = null;
    if (tracks.length >= 1) {
      const track = _.first(tracks);
      trackEl = (
        <div className={styles.friendMostRecentTrack}>
          <a href={track.url}>
            {track.artist.name} - {track.name}
          </a>
        </div>
      );
    }
    return (
      <div className={styles.friendRow}>
        <div
            onClick={this.handleFriendClick}
            className={styles.friendName}>
          {friend.name}
        </div>
        {trackEl}
      </div>
    );
  },
});


export default Friend;
