import "./App.css";

import { Provider, useSelector } from "react-redux";
import { store } from "./reduxStore/store";
import Routes from "./routes";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
