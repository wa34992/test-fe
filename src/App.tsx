import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import Product from "./Pages/Product";

import { Provider } from "react-redux";
import { store } from "./reduxStore/store";
import Route from "./routes/Route";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route isAuthenticated={false} path="/" component={Login} />
        <Route isAuthenticated={true} path="/product" component={Product} />
      </Router>
    </Provider>
  );
}
