import RepoItem from "./RepoItem";

const ReposList = ({ repos }) => {
  return (
    <div className="card rounded-lg shadow-md bg-base-100">
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold my-4">
          Latest Repositories
        </h2>
        {repos.map((repo, index) => (
          <RepoItem key={index} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default ReposList;
