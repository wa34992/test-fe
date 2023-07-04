import { useSelector, Provider } from "react-redux";
import Login from "../Pages/Login";
import Product from "../Pages/Product";
import { RootState, store } from "../reduxStore/store";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RoutePrivate from "./RoutePrivate";
import RoutePublic from "./RoutePublic";

export default function Routes() {
  const token = useSelector((state: RootState) => state.loginSlice.access);
  
  return (
    <Router>
      <Switch>
        <RoutePrivate
          isAuthenticated={!!token}
          path="/product"
          component={Product}
        />
        <RoutePublic isAuthenticated={false} path="/" component={Login} />
      </Switch>
    </Router>
  );
}
