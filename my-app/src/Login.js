import React from 'react'
import Header from './MyComponent/Header'

import { Box, Grid, Paper, TextField, } from '@material-ui/core'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

function Login() {
  const paperStyle = { padding: 20, height: '60vh', width: 280, margin: "20px auto" }
  const btnStyle = { margin: "10px 0px -5px" }
  return (
    <div>
      <Header l={false} h={false} />




      <div className='login_form'>

        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
                 <Link  to={"/signup"}>Sign Up?</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      )

    </div>
  )
}

export default Login