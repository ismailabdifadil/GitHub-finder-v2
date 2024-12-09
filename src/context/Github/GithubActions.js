import axios from "axios";

const endpoint = import.meta.env.VITE_APP_GITHUB_URL;
const tokenKey = import.meta.env.VITE_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: endpoint,
  headers: {
    Authorization: `token ${tokenKey}`,
  },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  try {
    const response = await github.get(`/search/users?${params}`);
    return response.data.items;
  } catch (error) {
    console.log(error);
  }
};

// Get user and repos

export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);
  return { user: user.data, repos: repos.data };
};

export const getUser = async (login) => {
  try {
    const response = await github.get(`/users/${login}`);

    if (response.status === 404) {
      window.location = "/not-found";
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

// Get user repos
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  try {
    const res = await fetch(`${endpoint}/users/${login}/repos?${params}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
