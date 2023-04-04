import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, email, phone, id } = friend;

  return (
    <div className="text-white border border-indigo-600 m-2 p-3 bg-gray-400">
      <h1>name: {name}</h1>
      <h1>Phone: {phone}</h1>
      <h1>Email: {email}</h1>
      <h1>id: {id}</h1>
      <button className="btn my-3">
        <Link to={`/friend/${id}`}>Show me more</Link>
      </button>
    </div>
  );
};

export default Friend;
