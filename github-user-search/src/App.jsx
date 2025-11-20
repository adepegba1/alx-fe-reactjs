import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";
import { useState } from "react";

const App = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search onSearch={fetchUserData} />
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
