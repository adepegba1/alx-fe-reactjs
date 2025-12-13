import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import { Login, ProtectedRoute } from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={Login} />
        <Route path="/blog/:id" element={BlogPost}>
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} path="/profile" />}
          />
          <h2>Home</h2>
        </Route>
      </Routes>
    </Router>
  );
}
