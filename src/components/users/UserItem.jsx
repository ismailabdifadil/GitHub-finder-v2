import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ login, avatar_url }) => {
  return (
    <div className="card shadow-md compact bg-base-100">
      <div className="flex-row space-x-4 items-center card-body">
        <div>
          <div className="avatar">
            <div className="w-16 rounded">
              <img src={avatar_url} alt="Profile Picture" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`user/${login}`}
          >
            Visit to Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
