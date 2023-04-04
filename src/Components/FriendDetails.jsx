import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData()
    const {name, phone, email} = friend
    return (
        <div className='text-center mt-5'>
            <h1>Name: {name}</h1>
            <h1>Phone: {phone}</h1>
            <h1>Email: {email}</h1>
        </div>
    );
};

export default FriendDetails;