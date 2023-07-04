import { all } from "redux-saga/effects"
import login from "../Pages/Login/redux/saga"
import product from "../Pages/Product/redux/saga"



export function* rootSaga() {
  yield all([
    login,
    product,
  ])
}
