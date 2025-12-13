import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NestedRoutes from "./components/NestedRoutes";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile" component={NestedRoutes} />
        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>
    </Router>
  );
}
