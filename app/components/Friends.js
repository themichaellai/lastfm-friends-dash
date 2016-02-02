import React from 'react';

import Friend from './Friend';

import styles from '../styles/Friends.css';

const Friends = (props) => {
  const friends = props.friends.map((f) => <Friend friend={f} key={f.name} />);
  return (
    <div className={styles.friends}>
      {friends}
    </div>
  );
};

Friends.propTypes = {
  friends: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default Friends;
