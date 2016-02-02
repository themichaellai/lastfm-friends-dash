import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from './actions';

import Friends from './components/Friends';

import styles from './styles/App.css';

const App = React.createClass({
  propTypes: {
    username: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
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

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.getFriends();
    }
  },

  render() {
    const friends = this.props.friends.map((f, i) => {
      return <li key={i}>{f.name}</li>
    });
    return (
      <div>
        <div className={styles.usernameInput}>
          <input
              type="text"
              ref="usernameInput"
              onKeyPress={this.handleKeyPress}>
            </input>
          <button
              className={styles.usernameInputButton}
              onClick={this.getFriends}>
            Go
          </button>
        </div>
        <Friends friends={this.props.friends} />
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
