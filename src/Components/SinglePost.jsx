import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SinglePost = ({ post }) => {
    const { title, body, id } = post
    const navigate = useNavigate()
    const handlePost = () => {
        navigate(`/post/${id}`)
    }
    return (
      <div className="border border-green-500 p-4 bg-gray-400">
            <h1 className='mb-5'>Single post: {title}</h1>
            <Link to={`/post/${id}`}>Single Post</Link>
            <button className='btn ml-4' onClick={handlePost}> Go</button>
      </div>
    );
};

export default SinglePost;