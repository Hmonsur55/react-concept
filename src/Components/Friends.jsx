import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from './Friend';

const Friends = () => {
    const data = useLoaderData()
    return (
      <div className="grid grid-cols-3">
        {data.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    );
};

export default Friends;