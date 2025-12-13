import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import Profile from "./components/Profile";
import { ProtectedRoute } from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Switch>
        <Routes>
          <Route path="/login" component={Login} />
          <Route path="/blog/:id" component={BlogPost}>
            <Route
              path="/profile"
              element={<ProtectedRoute element={<Profile />} path="/profile" />}
            />
            <h2>Home</h2>
          </Route>
        </Routes>
      </Switch>
    </Router>
  );
}
