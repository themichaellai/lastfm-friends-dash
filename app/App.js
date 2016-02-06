import React from 'react';
import { connect } from 'react-redux';
import {
  fetchFriends,
  fetchLatestTracks,
} from './actions/last-fm';

import Friends from './components/Friends';
import Tracks from './components/Tracks';

import styles from './styles/App.css';

const App = React.createClass({
  propTypes: {
    friends: React.PropTypes.object.isRequired,
    friendsOrder: React.PropTypes.array.isRequired,
    uiState: React.PropTypes.shape({
      selectedFriend: React.PropTypes.string,
    }),
    dispatch: React.PropTypes.func.isRequired,
    username: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      friends: [],
      username: '',
    };
  },

  componentDidMount() {
    if (this.props.username !== '') {
      this.refs.usernameInput.value = this.props.username;
      this.props.dispatch(fetchFriends(this.props.username));
    }
  },

  getFriends() {
    this.props.dispatch(fetchFriends(this.refs.usernameInput.value));
  },

  handleFriendClick(username) {
    this.props.dispatch(fetchLatestTracks(username));
  },

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      const username = this.refs.usernameInput.value;
      const path = window.location.pathname;
      this.getFriends();
      window.history.pushState(username, username, `${path}/?username=${username}&`);
    }
  },

  renderTracks() {
    const { uiState, friends } = this.props;
    if (uiState.selectedFriend) {
      return <Tracks tracks={friends[uiState.selectedFriend].tracks} />;
    }
  },

  render() {
    return (
      <div className={styles.main}>
        <div>
          <div className={styles.usernameInput}>
            <input
                type="text"
                ref="usernameInput"
                className={styles.usernameInputInput}
                onKeyPress={this.handleKeyPress}>
              </input>
            <button
                className={styles.usernameInputButton}
                onClick={this.getFriends}>
              Go
            </button>
          </div>
          <Friends
            friends={this.props.friends}
            friendsOrder={this.props.friendsOrder}
            handleFriendClick={this.handleFriendClick} />
        </div>
        <div>
          {this.renderTracks()}
        </div>
      </div>
    );
  },
});

const select = function(state) {
  return {
    friends: state.friends.get('friends').toJS(),
    friendsOrder: state.friends.get('friendsOrder').toJS(),
    uiState: state.uiState.toJS(),
  };
};

export default connect(select)(App);
