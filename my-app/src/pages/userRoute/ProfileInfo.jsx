import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { getCurrentUserDetail, getToken } from '../../auth';
import Footer from '../../MyComponent/Footer'
import Header from '../../MyComponent/Header'
import UserDashboard from './UserDashboard';
import "./Profile.css"
import { getImageListItemBarUtilityClass } from '@mui/material';
import { Link } from 'react-router-dom';
import { containerClasses } from '@mui/system';
import { Card, Container } from 'react-bootstrap';
import { CardBody, CardHeader } from 'reactstrap';

function ProfileInfo() {

  const [formData, setFormData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState("");
  useEffect(() => {
    const userdet = getCurrentUserDetail();
    setUserData(userdet);
    const tokennum = getToken();
    setToken(tokennum);


    const emailid = userdet.email;
    axios.get(`http://localhost:8080/patient/getByEmail/${emailid}`,
      {
        headers: {
          'Authorization': `Bearer ${tokennum}`
        }
      }).then((res) => {
        setFormData(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])
  const [msg, setMsg] = useState(null);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http://localhost:8080/patient/update", { name: formData.name, email: formData.email, password: formData.password, mobile: formData.mobile, address: formData.address, gender: formData.gender, age: formData.age, weight: formData.weight, height: formData.height, occupation: formData.occupation }, {

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }

      })
      if (res.status === 200) {
        alert("User Updated successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }


  }
  let handleEmail = (e) => {

    setMsg("Email cannot be Change")
  }
  let handleMsg = (e) => {

    setMsg("")
  }


  return (

    <>

      <Header />



      <Container className='card_allignment'>

        <Card>

          <CardHeader >

            <h1 style={{ textAlign: "center", padding: "10px", color: "purple" }}>Profile</h1>

           

            </CardHeader>

          <CardBody style={{backgroundColor:"#b8cee8"}}>

           

           




              <form className='form' onSubmit={handleSubmit}>

                {formData && (

                  <>

                    <div className='form-group'>

                      <label htmlFor='name' className='form-label'>

                       <span style={{color:'red' }}> Name:</span>

                        <input  id="name" className='form-control' type="text" value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} />

                      </label>

                    </div>



                    <div className='form-group'>

                      <label htmlFor='email' className='form-label'>

                        Email:

                        <input id="email" className='form-control' type="email" value={formData.email} onBlur={() => { handleMsg() }} onFocus={() => { handleEmail() }} readOnly />



                      </label>

                      </div>

                      {msg && <p> {msg}</p>}

                       

                       <div className='form-group'>                    

                         <label htmlFor='contact' className='form-label'>

                        Contact:

                        <input id="contact" className="form-control" type="text" value={formData.mobile} onChange={(e) => { setFormData({ ...formData, mobile: e.target.value }) }} />

                      </label>

                      </div>

                   

                      <div className='form-group'>

                      <label htmlFor='occupation' className='form-label'>

                        Occupation:

                        <input id="occupation"  className="form-control" type="text" value={formData.occupation} onChange={(e) => { setFormData({ ...formData, occupation: e.target.value }) }} />

                      </label>

                      </div>

                      <label className='form-label'>

                        Weight:

                        <input type="text" className="form-control" value={formData.weight} onChange={(e) => { setFormData({ ...formData, weight: e.target.value }) }} />

                      </label>



                      <label className='form-label'>

                        Height:

                        <input type="text"  className="form-control" value={formData.height} onChange={(e) => { setFormData({ ...formData, height: e.target.value }) }} />

                      </label>



                      <label className='form-label'>

                        Age:

                        <input  type="text"  className="form-control" value={formData.age} onChange={(e) => { setFormData({ ...formData, age: e.target.value }) }} />

                      </label>



                      <label className='form-label'>

                        Gender

                        <input type="text" className="form-control"  value={formData.gender} onChange={(e) => { setFormData({ ...formData, gender: e.target.value }) }} />

                      </label>



                      <label className='form-label'>

                        Address:

                        <input type="text" className="form-control"value={formData.address} onChange={(e) => { setFormData({ ...formData, address: e.target.value }) }} />

                      </label>



                      <button type="submit" className="form-button">

                        Update

                      </button>

                      <div><Link to={"/user/updatePass"}>Update Password</Link></div>

                     

                    </>

      )}

                  </form>







       

                  </CardBody>

        </Card>

      </Container>





      <Footer />

    </>

  )

}



export default ProfileInfo