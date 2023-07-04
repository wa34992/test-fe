import { useState } from 'react'
import './style.scss';
import { useDispatch } from "react-redux";
import { callLoginRequest } from './redux/reducer';



const Login = ({history}) => {
  const dispatch = useDispatch();

  const submitLogin = (event: any) => {
    event.preventDefault()
    const data = event.target.elements
    console.log("login input state", event.target.elements.email.value)
    dispatch(callLoginRequest({"email": data.email.value, "password": data.password.value}))
    history.push('/product')
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
              <form onSubmit={submitLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" name='email' className="form-control"  id="email" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" name='password' className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-4">Login</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Login
