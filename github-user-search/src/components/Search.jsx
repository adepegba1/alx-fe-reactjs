import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData({ username, location, minRepos });
      setUserData(data); // store the result for display
      onSubmit(data); // send result to App
    } catch (err) {
      setError(err.message);
      setUserData([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Advanced GitHub User Search</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username (optional)"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories (optional)"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Searching...</p>}
      {error && <p>Looks like we cant find the user</p>}
      {userData.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          {userData.map((user) => (
            <div
              key={user.id}
              style={{
                border: "1px solid #ccc",
                margin: "1rem",
                padding: "1rem",
              }}
            >
              <h3>Username: {user.login}</h3>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
              <br />
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                width="100"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
