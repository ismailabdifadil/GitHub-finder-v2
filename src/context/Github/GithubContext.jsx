import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

export const GithubContext = createContext();

const endpoint = import.meta.env.VITE_APP_GITHUB_URL;
const tokenKey = import.meta.env.VITE_APP_GITHUB_TOKEN;

const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get users (Testing Purpose)
  const fetchUsers = async () => {
    setLoading();
    try {
      const res = await fetch(`${endpoint}/users`, {
        headers: {
          Authorization: `token ${tokenKey}`,
        },
      });
      const data = await res.json();
      dispatch({
        type: "GET_USERS",
        payload: data,
      });
    } catch (error) {}
  };

  // Search Users
  const searchUsers = async (text) => {
    try {
      setLoading();
      const res = await fetch(`${endpoint}/search/users?q=${text}`);
      const { items } = await res.json();
      dispatch({
        type: "GET_USERS",
        payload: items,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async (login) => {
    try {
      const res = await fetch(`${endpoint}/users/${login}`);

      if (res.status === 404) {
        window.location = "/not-found";
      } else {
        const data = await res.json();

        dispatch({
          type: "GET_USER",
          payload: data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get user repos
  const getUserRepos = async (login) => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    try {
      const res = await fetch(`${endpoint}/users/${login}/repos?${params}`);
      const data = await res.json();
      dispatch({
        type: "GET_REPOS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Set loading to true
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        dispatch,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
