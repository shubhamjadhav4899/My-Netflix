import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "../App";
function Root() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
export default Root;
