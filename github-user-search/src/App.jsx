import Search from "./components/Search";
import { fetchGitHubUser } from "./services/githubService";
import { useState } from "react";

const App = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useStete(null);

  const fetchGitHubUser = async (username) => {
    try {
      setError(null);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("Looks like we cant find the user");
      const data = await response.json();
      setSearchResult(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search onSearch={fetchGitHubUser} />
      {searchResult && (
        <div>
          <h2>{searchResult.login}</h2>
          <img src={searchResult.avatar_url} alt="avatar" width="100" />
          <a
            href={searchResult.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};
export default App;
