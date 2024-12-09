import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GithubContext } from "../context/Github/GithubContext";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import ReposList from "../components/Repos/ReposList";
import {
  getUser,
  getUserAndRepos,
  getUserRepos,
} from "../context/Github/GithubActions";

const UserProfile = () => {
  const { user, loading, repos, dispatch } = useContext(GithubContext);
  const { login } = useParams();

  useEffect(() => {
    const fetchUserAndRepos = async () => {
      dispatch({ type: "SET_LOADING" });
      const userData = await getUserAndRepos(login);
      dispatch({
        type: "GET_USER_AND_REPOS",
        payload: userData,
      });
    };
    fetchUserAndRepos();
  }, []);

  const {
    avatar_url,
    twitter_username,
    name,
    html_url,
    bio,
    type,
    hireable,
    location,
    blog,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  if (loading) return <div className="spinner show"></div>;

  return (
    <div className="w-full  mx-auto lg:w-10/12">
      <div className="mb-4">
        <Link to="/" className="btn btn-ghost">
          Back To Search
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-8 md:gap-8">
        <div className="custom-card-image mb-6 md:mb-0">
          <div className="card rounded-lg shadow-xl image-full relative">
            <figure>
              <img src={avatar_url} alt="" />
            </figure>
            <div className="absolute  bottom-6 left-6 text-white">
              <h2 className="card-title mb-0">{name}</h2>
              <p>@{login}</p>
            </div>
          </div>
        </div>

        <div className="col-span-2 ">
          <div className="mb-6">
            <h1 className="text-3xl card-title">
              {name}
              <div className="ml-2 mr-1 badge badge-success">{type}</div>
              {hireable && (
                <div className="mx-1 badge badge-info">Hireable</div>
              )}
            </h1>
            <p>{bio}</p>
            <div className="mt-4 card-actions">
              <a href={html_url} target="_blank" className="btn btn-outline">
                Visit GitHub Profile
              </a>
            </div>
          </div>
          <div className="stats shadow-md w-full">
            {location && (
              <div className="stat">
                <div className="stat-title text-md">Location</div>
                <div className="stat-value text-lg">{location}</div>
              </div>
            )}
            {blog && (
              <div className="stat">
                <div className="stat-title text-md">Website</div>
                <div className="stat-value text-lg">
                  <a href={`https://${blog}`} rel="noreferrer" target="_blank">
                    {blog}
                  </a>
                </div>
              </div>
            )}
            {twitter_username && (
              <div className="stat">
                <div className="stat-title text-md">Twitter</div>
                <div className="stat-value text-lg">
                  <a
                    href={`https://twitter.com/${twitter_username}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {twitter_username}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="stats shadow w-full py-5 mb-6">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Followers</div>
          <div className="stat-value text-3xl md:text-4xl pr-5">
            {followers}
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserFriends className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Following</div>
          <div className="stat-value text-3xl md:text-4xl pr-5">
            {following}
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaCodepen className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Public Repos</div>
          <div className="stat-value text-3xl md:text-4xl pr-5">
            {public_repos}
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaStore className="text-3xl md:text-5xl" />
          </div>
          <div className="stat-title pr-5">Public Gists</div>
          <div className="stat-value text-3xl md:text-4xl pr-5">
            {public_gists}
          </div>
        </div>
      </div>
      <ReposList repos={repos} />
    </div>
  );
};

export default UserProfile;
