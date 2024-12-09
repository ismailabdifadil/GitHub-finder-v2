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

  // Set loading to true
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
