import React from "react";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  const {
    html_url,
    name,
    description,
    watchers_count,
    stargazers_count,
    forks_count,
    open_issues,
    open_issues_count,
  } = repo;
  return (
    <div className="card rounded-lg bg-gray-800 hover:bg-gray-900 mb-2">
      <div className="card-body">
        <h3 className="text-xl mb-2 font-semibold">
          <a href={html_url} className="text-2xl">
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-2">{description}</p>
        <div>
          <div className="mr-2 badge badge-info badge-lg">
            <FaEye className="mr-2" />
            {watchers_count}
          </div>
          <div className="mr-2 badge badge-success badge-lg">
            <FaStar className="mr-2" />
            {stargazers_count}
          </div>
          <div className="mr-2 badge badge-warning badge-lg">
            <FaInfo className="mr-2" />
            {open_issues}
          </div>
          <div className="mr-2 badge badge-error badge-lg">
            <FaUtensils className="mr-2" />
            {forks_count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
