import React, { useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import { doDoctorLogin } from '../auth'
function DoctorLogin() {
    {   const navigate=useNavigate();
        const [msg,setMsg]=useState("");
        const [email,setEmail]=useState("");
        const [pass,setPass]=useState("");
       function handleDoctor(e){
            e.preventDefault();
            if (email=="Lavish@gmail.com" && pass=="Lavish@123"){
              doDoctorLogin("Lavish",()=>{
                console.log("login detail is saved to the local storage");
                navigate("/doct/Dashboard")
              })
            }else{
              setMsg("Invalid Doctor")
            }
       }

        return (
          <div>
            <Header l={false} h={false} />
            <div className='login_form' >
      
              <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleDoctor}>
                  <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Doctor Login</h3>
                    <div className="form-group mt-3">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        value={pass}
                        onChange={(e)=>setPass(e.target.value)}
                      />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                    <Link style={{textDecoration:"none"}} to={"/login"}>Patient Login</Link>
                    <div>
                      {msg &&<p>{msg}</p>}
                    </div>
                    <p className="forgot-password text-right mt-2">
                       
                    </p>
                  </div>
                </form>
              </div>
            </div>
            
      
          </div>
        )
      }
    }
      
export default DoctorLogin