import React from 'react'
import Header from './MyComponent/Header'
import Footer from './MyComponent/Footer'
import {Box, Grid,Paper,TextField,} from'@material-ui/core'
import Button from '@mui/material/Button';
import {Link} from "react-router-dom"

function Login() {
    const paperStyle={padding:20,height:'60vh',width:280,margin:"20px auto"}
  const btnStyle={margin:"10px 0px -5px"}
  return (
    <div>
        <Header l={false} h={false} />

      <Grid>
           <Paper  elevation={10} style={paperStyle}>
            <Grid align='left'>
            <h1>Log In</h1>
            </Grid>
          <TextField id="margin-dense" margin="dense" label='Email' variant= 'outlined' placeholder='Enter your Email' fullwidth required/>
          <TextField id="margin-dense" margin="dense"  label='Password' variant= 'outlined'placeholder='Enter your password'  type='password' fullwidth required/>
          <Button type='submit' fullwidth variant='contained' color='success' style={btnStyle} >Sign In</Button> 
          <Box >
            <p style={{marginTop: "20px"}}>
              Not having an account?
              <Link type="submit" to={"/signup"}>Signup</Link>
            </p>
          </Box>
           </Paper>
      </Grid>
  )



        <Footer/>
    </div>
  )
}

export default Login