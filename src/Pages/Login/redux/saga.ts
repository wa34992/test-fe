import { all, call, put, takeLatest } from "redux-saga/effects"
// import AsyncStorage from '@react-native-community/async-storage';
// config
// utils
import axios from 'axios'
import http from "../../../Api/http"
import { BASE_URL } from "../../../config"

import { authentication,callLoginRequest } from './reducer'



async function postLoginApi(data: any) {
  const URL = `${BASE_URL}/token/`
  const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
  }
  // axios.post(URL, data)
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  
  return http.post(URL,data, options)
}


function* postLogin(data) {

  try {
    const response = yield call(postLoginApi, data.payload)
    
  console.log("responseresponse", response)
    yield put(authentication(response.data))
  } catch (e) {
    const { response } = e
    if (response) {
      yield put(loginRequestFailure(response?.data ? response?.data : false))

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

export default all([
  takeLatest(callLoginRequest.type, postLogin),
  // takeLatest(COMPANY_LOGIN_REQUEST, companyLogin)
])
