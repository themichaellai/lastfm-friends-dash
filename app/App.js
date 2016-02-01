import React from 'react';
import { connect } from 'react-redux';
import { getFriends } from './actions';

const App = React.createClass({
  propTypes: {
  },

  getFriends() {
    this.props.dispatch(getFriends());
  },

  render() {
    const friends = this.props.friends.map((f, i) => {
      return <li key={i}>{f.name}</li>
    });
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.getFriends}>get friends</button>
        <ul>
          {friends}
        </ul>
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
