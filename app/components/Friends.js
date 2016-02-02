import React from 'react';

import Friend from './Friend';

const Friends = (props) => {
  const friends = props.friends.map((f) => <Friend friend={f} key={f.name} />);
  return (
    <div className="friends">
      {friends}
    </div>
  );
};

Friends.propTypes = {
  friends: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default Friends;
