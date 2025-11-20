import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";
import { useState } from "react";

const App = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setSearchResult(null);
    try {
      const data = await fetchUserData(username);
      setSearchResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading…</p>}
      {error && <p>{error}</p>}
      {searchResult && (
        <div>
          <img src={searchResult.avatar_url} alt="avatar" width="100" />
          <h2>{searchResult.name || searchResult.login}</h2>
          <a
            href={searchResult.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};
export default App;
