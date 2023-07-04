import { useState } from 'react'
import './style.scss';
import { useDispatch } from "react-redux";
import { callLoginRequest } from './redux/reducer';



const Login = () => {
  const dispatch = useDispatch();


  const submitLogin = () => {
  
    dispatch(callLoginRequest({
      "username": "test_1",
      "password": "test_1"
    }))
  }

  return (
    <>
      <section className="login-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 image-area">
              <img src="src/assets/images/login.jpg" alt="Login" className="img-fluid" />
            </div>
            <div className="col-md-6 form-area">
              <h2>Login</h2>
              {/* <form action="#"> */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>

                <button type="submit" onClick={submitLogin} className="btn btn-primary w-100 mt-4">Login</button>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Login
