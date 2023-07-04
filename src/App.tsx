import './App.css'
import Login from './Pages/Login'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Product from './Pages/Product';

import { Provider } from 'react-redux'
import { store } from './reduxStore/store';

export default function App() {
  return (

    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product" element={<Product />} />
          {/* <Route path="/users/*" element={<UserApp />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>

  )
}