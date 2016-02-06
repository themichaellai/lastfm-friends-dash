import React from 'react';

import Friend from './Friend';

import styles from '../styles/Friends.css';

const Friends = (props) => {
  const { friends, friendsOrder } = props;
  const friendsEl = friendsOrder.map((fname) => {
    const friend = friends[fname];
    return (
      <Friend
        friend={friend}
        key={friend.name}
        {...props} />
    );
  });
  return (
    <div className={styles.friends}>
      {friendsEl}
    </div>
  );
};

Friends.propTypes = {
  friends: React.PropTypes.object,
  friendsOrder: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default Friends;
