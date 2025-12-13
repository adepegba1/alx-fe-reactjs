import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to="/profile" />
    }
  />
);

const ProtectedRoute = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/profile" component={Profile} />

        <PrivateRoute path="/details" component={ProfileDetails} />

        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>
    </div>
  </Router>
);

const Login = () => {
  const handleLogin = () => {
    localStorage.setItem("authToken", "your-token");
    window.location.href = "/details";
  };

  return <button onClick={handleLogin}>Login</button>;
};

const ProfileDetails = () => <h2>ProfileDetails</h2>;

export default ProtectedRoute;
