import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData({ username, location, minRepos });
      setUserData(data); // store the result for display
      onSubmit(data); // send result to App
    } catch (err) {
      setError(err.message);
      setUserData(null);
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
      {userData.map((data) => (
        <div key={data.id} style={{ marginTop: "1rem" }}>
          <p>Username: {data.login}</p>
          <p>
            Profile URL:{" "}
            <a href={data.html_url} target="_blank" rel="noopener noreferrer">
              {data.html_url}
            </a>
          </p>
          <img
            src={data.avatar_url}
            alt={`${data.login}'s avatar`}
            width="100"
          />
        </div>
      ))}
    </div>
  );
};

export default Search;
