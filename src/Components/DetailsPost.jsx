import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const DetailsPost = () => {
    const post = useLoaderData()
    const {id, title, body} = post
    
    const navigate = useNavigate()
    const goBack = () => {
         navigate(-1)
     };
    return (

        <div className='text-center bg-orange-400 shadow-sm container m-auto p-4 rounded text-xl flex flex-col gap-3'>
            <h1>Title:{title}</h1>
            <h1>Body:{body}</h1>
            <h1>Id:{id}</h1>
            <button className='btn' onClick={goBack}> Go Back</button>
        </div>
    );
};

export default DetailsPost;