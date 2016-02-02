import React from 'react';
import { connect } from 'react-redux';
import {
  fetchFriends,
  fetchLatestTracks,
} from './actions';

import { UserType } from './types';

import Friends from './components/Friends';

import styles from './styles/App.css';

const App = React.createClass({
  propTypes: {
    friends: React.PropTypes.arrayOf(UserType),
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
      this.getFriends();
    }
  },

  render() {
    return (
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
          handleFriendClick={this.handleFriendClick} />
      </div>
    );
  },
});

const select = function(state) {
  return {
    friends: state.friends.toJS(),
  };
};

export default connect(select)(App);
