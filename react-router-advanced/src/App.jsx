import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>
    </Router>
  );
}
