import axios from "axios";
const apikey = import.meta.env.VITE_APP_GITHUB_API_KEY;
const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${apikey}`,
  },
});

export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);

    return response.data;
  } catch (err) {
    // Normalise the error message for the caller.
    if (err.response || err.response.status === 404) {
      throw new Error("Looks like we cant find the user");
    }
    throw err; // re‑throw other errors (network, timeout, etc.)
  }
};
