import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from './SinglePost';

const Posts = () => {
    const posts = useLoaderData()
    console.log(posts)
    return (
      <div className="grid grid-cols-4 gap-5">
        {posts.map((post) => (
          <SinglePost key={post.id} post={post}></SinglePost>
        ))}
      </div>
    );
};

export default Posts;