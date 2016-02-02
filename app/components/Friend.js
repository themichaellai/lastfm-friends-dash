import React from 'react';
import _ from 'underscore';

import Tracks from './Tracks';

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

  getInitialState() {
    return {
      expanded: false,
    };
  },

  handleFriendClick() {
    // TODO: move this to state atom
    const friend = this.props.friend;
    if (friend.tracks.length > 1) {
      this.setState({ expanded: !this.state.expanded });
    } else {
      this.props.handleFriendClick(friend.name);
      this.setState({ expanded: true });
    }
  },

  render() {
    const { friend } = this.props;
    const tracks = friend.tracks;
    let trackEl = null;
    if (tracks.length === 1 ||
        (tracks.length > 1 && !this.state.expanded)) {
      const track = _.first(tracks);
      trackEl = (
        <div className={styles.friendMostRecentTrack}>
          <a href={track.url}>
            {track.artist.name} - {track.name}
          </a>
        </div>
      );
    } else if (tracks.length > 1 && this.state.expanded) {
      trackEl = <Tracks tracks={tracks} />;
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
