import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Profile() {
  return (
    <Router>
      <nav>
        <Link to="/profile">Profile</Link>
      </nav>
      <Switch>
        <Routes>
          <Route path="/profile" component={Homepage} />
          <Route path="/">
            <h2>Home</h2>
          </Route>
        </Routes>
      </Switch>
    </Router>
  );
}

const Homepage = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Profile</h2>
      <ul>
        <li>
          <Link to={`${url}/details`}>ProfileDetails</Link>
        </li>
        <li>
          <Link to={`${url}/settings`}>ProfileSettings</Link>
        </li>
        <li>
          <Link to={`${url}/posts/`}>Dynamic Blog Post</Link>
        </li>
      </ul>

      <Switch>
        <Routes>
          <Route exact path={path}>
            <h3>Please select an option.</h3>
          </Route>

          <Route path={`${path}/details`} component={ProfileDetails} />
          <Route path={`${path}/settings`} component={ProfileSettings} />
          <Route path={`${path}/blog/:id`} component={BlogPost} />
        </Routes>
      </Switch>
    </div>
  );
};

const ProfileDetails = () => <h3>Profile Details</h3>;

const ProfileSettings = () => <h3>Profile Settings</h3>;

const BlogPost = () => {
  const { id } = useParams();
  return <h3>Blog Post #{id}</h3>;
};

export default Profile;
