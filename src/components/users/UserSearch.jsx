import React, { useContext, useState } from "react";
import { GithubContext } from "../../context/Github/GithubContext";
import { useAlert } from "../../context/Alert/AlertContext";

const UserSearch = () => {
  const { users, searchUsers, dispatch } = useContext(GithubContext);
  const { setAlert, alert } = useAlert();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Search Todo
    if (!text || text === "") {
      setAlert("Fill in the search field", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="input bg-gray-200 input-lg w-full text-black pr-40"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 w-36 btn btn-lg rounded-l-none"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className="btn btn-ghost btn-lg"
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
          >
            CLEAR
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
