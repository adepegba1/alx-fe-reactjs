import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function NestedRoutes() {
  return (
    <Router>
      <nav>
        <Link to="/profile">Profile</Link>
      </nav>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>
    </Router>
  );
}

const Profile = () => {
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
        <Route exact path={path}>
          <h3>Please select an option.</h3>
        </Route>

        <Route path={`${path}/details`} component={ProfileDetails} />
        <Route path={`${path}/settings`} component={ProfileSettings} />
        <Route path={`${path}/psts/:id`} component={BlogPost} />
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

export default NestedRoutes;
