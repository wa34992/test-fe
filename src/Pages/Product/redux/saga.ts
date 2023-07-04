import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects"
// import AsyncStorage from '@react-native-community/async-storage';
// config
// utils
import http from "../../../Api/http"
import { BASE_URL } from "../../../config"
import { store } from "../../../reduxStore/store";

import { setAllProducts, getAllProducts } from './reducer'

// types
// actions
// import {
//   loginRequestSuccess,
//   loginRequestFailure,
//   setAccessToken,
//   setOnBoarding,
//   setIsAuth,
//   setKeepMeLoggedIn,
//   setEnrollCompany,
//   industryDetails
// } from "./action"


// async function postAddCartApi(data: any) {
//   const URL = `${BASE_URL}/login/`
//   const options = {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     method: "POST",
//     data
//   }
//   return http.post(URL, options)
// }

const getHeader = () => {
  const state = store.getState();
  const authToken = state.loginSlice.access

  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    }
  };
};

async function getAllProductApi() {
  const URL = `${BASE_URL}/products/`
  const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": getHeader()
    }
    // data
  }
  console.log('getHeader()', getHeader())
  return http.get(URL, getHeader())
}

function* getAllProd() {
  console.log("here")
  try {
    const response = yield call(getAllProductApi)
    console.log({ response })
    yield put(setAllProducts(response.data))
  } catch (e) {
    const { response } = e
    if (response) {
      // yield put(loginRequestFailure(response?.data ? response?.data : false))

      // toast.error(
      //   response?.data?.non_field_errors
      //     ? response?.data?.non_field_errors[0]
      //     : response?.data?.error
      //     ? response?.data?.error[0]
      //     : `${strings.SOMTHING_WENT_WRONG}`
      // )
    }
  }
}




// function* postAddCart({ data }: any) {
//   try {
//     const response = yield call(postAddCartApi, data)
//     yield put(addCart(response.data))
//   } catch (e) {
//     const { response } = e
//     if (response) {
//       yield put(loginRequestFailure(response?.data ? response?.data : false))

//       // toast.error(
//       //   response?.data?.non_field_errors
//       //     ? response?.data?.non_field_errors[0]
//       //     : response?.data?.error
//       //     ? response?.data?.error[0]
//       //     : `${strings.SOMTHING_WENT_WRONG}`
//       // )
//     }
//   }
// }




export default all([
  takeLatest(getAllProducts.type, getAllProd),

  // takeLatest(COMPANY_LOGIN_REQUEST, companyLogin)
])
