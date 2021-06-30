
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../containers/Navbar/Navbar";
import Users from "../containers/Users/Users";
// import Repos from "../containers/Repos";
import User from "../containers/User/User";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Users} />
        {/* <Route exact path="/cart" component={Repos} /> */}
        <Route exact path="/users/:user" component={User} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;