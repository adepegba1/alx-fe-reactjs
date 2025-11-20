const apikey = import.meta.env.VITE_APP_GITHUB_API_KEY;
export const fetchGitHubUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${apikey}`,
    },
  });
  if (!response.ok) {
    throw new Error("User not found");
  }
  const data = await response.json();
  return data;
};
