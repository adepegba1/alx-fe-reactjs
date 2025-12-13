import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Profile from "./components/Profile";

export default function App() {
  return (
    <Router>
      <Switch>
        <Routes>
          <Route path="/profile" component={Profile} />
          <Route path="/blog/:id" component={BlogPost}>
            <h2>Home</h2>
          </Route>
        </Routes>
      </Switch>
    </Router>
  );
}
