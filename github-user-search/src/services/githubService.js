import axios from "axios";
const apikey = import.meta.env.VITE_APP_GITHUB_API_KEY;
const githubApi = axios.create({
  baseURL: "https://api.github.com/search/users?q",
  headers: {
    Authorization: `token ${apikey}`,
  },
});

export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) {
      query += `${username} in:login`;
    }
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${baseURL}=${query.trim()}`);
    return response.data.items;
  } catch (err) {
    // Normalise the error message for the caller.
    if (err.response || err.response.status === 404) {
      throw new Error("Looks like we cant find the user");
    }
    throw err; // re‑throw other errors (network, timeout, etc.)
  }
};
