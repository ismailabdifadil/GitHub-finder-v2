import { useContext } from "react";
import UserItem from "./UserItem";
import { GithubContext } from "../../context/Github/GithubContext";

const UsersResults = () => {
  const { users, loading } = useContext(GithubContext);
  if (loading) return <div className="spinner show"></div>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-4 gap-8">
      {users?.map((user) => (
        <div key={user.id}>
          <UserItem {...user} />
        </div>
      ))}
    </div>
  );
};

export default UsersResults;
