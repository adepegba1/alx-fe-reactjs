import { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchResult = (data) => {
    // Receive user data from Search component
    setSearchResult(data);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>

      <Search onSubmit={handleSearchResult} />
    </div>
  );
};

export default App;
