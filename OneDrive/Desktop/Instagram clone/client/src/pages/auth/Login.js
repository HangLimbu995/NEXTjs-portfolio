import { Box, Button, Container, Input, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <Container sx={{ width: '100%', height: '100dvh', display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center',gap:'10px' }}   >
      <Box sx={{ maxWidth: '350px', width: '100%', height: '65vh', backgroundColor: 'white', border: '1px solid rgb(219,219,219)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}  >
        <Typography fontSize={33} fontWeight={400} m='20px 0' fontFamily={"'Pacifico', cursive"} >
          Instagram
        </Typography>
        <Input type='text' name='username' placeholder='username or email' sx={{ maxWidth: '270px', width: '100%', fontSize: '13px', p: "5px", m: '5px 0' }} />
        <Input type='password' name='password' placeholder='Password' sx={{ maxWidth: '270px', width: '100%', fontSize: '13px', p: "5px", m: '5px 0' }} />
        <Button variant="contained" sx={{ maxWidth: "270px", width: "100%", height: '32px', borderRadius: '10px', backgroundColor: '#4bb4f8', mt: '10px' ,'&:hover':{backgroundColor: '#4bb4f8', outline: 'none', boxShadow: 'none',p:0}}}>Log in</Button>
        <Box sx={{maxWidth: '400px',width: '100%',margin: '0 auto',display: 'flex',alignItems: 'center',justifyContent:'center',m:'10px 0'}} >
          <div style={{flex:'1',maxWidth: '110px',height: '1px', backgroundColor: '#ccc',p:0}} />
          <div style={{margin:'0 10px', fonSize: '16px',color: '#333'}} >or</div>
          <div style={{flex:'1',maxWidth: '110px',width: '50%',height: '1px', backgroundColor: '#ccc'}} />
        </Box>
        <Link to="#"  style={{textDecoration:'none',fontSize: '15px',fontWeight: '600', display: 'flex',gap:'5px',alignItems:'center',color:'#385185'}}><FacebookIcon />Log in with Facebook</Link>
        <Link to="#" style={{textDecoration:'none',fontSize: '13px',fontWeight: '400', display: 'flex',gap:'5px',alignItems:'center',margin:'15px 0 0 0',color:'#0095f6'}}>Forgot password?</Link>
      </Box>
      <Box sx={{ maxWidth: '350px', width: '100%', height: '10vh', backgroundColor: 'white', border: '1px solid rgb(219,219,219)', display: 'flex',alignItems: 'center' ,justifyContent:'center',fontSize:'14px'}}   >
      Don't have an account?&nbsp; <Link to='/register' style={{textDecoration: 'none',fontWeight:'500',color:'#0095f6'}}>Sign up</Link>
      </Box>
    </Container>
  )
}

export default Login