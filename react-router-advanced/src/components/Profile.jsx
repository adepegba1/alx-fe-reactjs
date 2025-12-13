import {
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Profile() {
  return (
    <>
      <nav>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/profile" component={Homepage} />
        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Routes>
    </>
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
          <Link to={`${url}/posts/42`}>Dynamic Blog Post</Link>
        </li>
      </ul>

      <Routes>
        <Route index element={<h3>Please select an option.</h3>} />

        <Route path={`${path}/details`} component={ProfileDetails} />
        <Route path={`${path}/settings`} component={ProfileSettings} />
        <Route path={`${path}/blog/:id`} component={BlogPost} />
      </Routes>
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
