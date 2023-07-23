import { Box, Button, Container, FormControl, FormGroup, Input, TextField, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import React, { useState } from 'react'
import { httpClient } from '../../utils/httpClient';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom'
import { errorHandler } from '../../services/error.service';

const formData = {
    email: '',
    username: '',
    fullname: '',
    password: '',
}

const Register = () => {
    const [formFields, setFormFields] = useState({ ...formData })
    const [errorMsg, setErrorMsg] = useState({ ...formData })
    const [isDisabled, setIsDisabled] = useState(true)

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setIsDisabled(false)
        setFormFields((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const validateForm = () => {
        const { email, username, fullname, password } = formFields
        let isValid = true;
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

        const newErrors = { ...formData }

        function required(fieldName) {
            if (fieldName.length < 0 || fieldName === '')
                return newErrors.fieldName = 'required field* '
        }

        if (!emailRegex.test(formFields.email)) {
            newErrors.email = 'Invalid email address'
            isValid = false
            required(email)
        }

        if (!(formFields.email.includes('@')) && !(formFields.email.includes('.com'))) {
            newErrors.email = 'Invalid email address'
            isValid = false
        }

        if (formFields.username.length < 6) {
            newErrors.username = 'username must be more then 6 characters'
            isValid = false
            required(username)
        }
        if (formFields.fullname.length < 0 || formFields.fullname === '') {
            newErrors.fullname = 'required field*'
            isValid = false
            required(fullname)
        }

        if (formFields.password.length < 8) {
            newErrors.password = 'password must be 8 characters long'
            isValid = false
            required(password)
        }

        setErrorMsg(newErrors)
        return isValid

    }


    const submit = async (e) => {
        if (!validateForm()) {
            setIsDisabled(true)
            return
        }
        await httpClient.POST('/auth/register', formFields, true)
            // .then(res => res.json())
            .then((data) => {
                console.log('data structure', data)
                toast.success('Congratulation, Sign up successful')
                localStorage.setItem('userData', JSON.stringify(data.data));
                navigate('/')
            })
            .catch(err => {
                toast.error('Error on registration', {
                    autoClose: 3000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'light'
                })
                console.log(err)
                return errorHandler(err)
            })
    }

    return (
        <Container sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px', mt: '10px' }}   >
            <Box sx={{ maxWidth: '350px', width: '100%', height: '105vh', backgroundColor: 'white', border: '1px solid rgb(219,219,219)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}  >
                <Typography fontSize={33} fontWeight={400} m='20px 0' fontFamily={"'Pacifico', cursive"} >
                    Instagram
                </Typography>
                <Typography fontSize={17} fontWeight={500} maxWidth={'270px'} m='10px 0' alignItems={'center'} textAlign={'center'} color={'#767676'}>
                    Sign up to see photos and videos from your friends
                </Typography>
                <Link to="#" style={{ maxWidth: '270px', width: '100%', backgroundColor: '#0095f6', textDecoration: 'none', fontSize: '15px', fontWeight: '600', display: 'flex', gap: '5px', justifyContent: 'center', alignItems: 'center', padding: '5px', borderRadius: "10px", color: '#fff' }}><FacebookIcon />Log in with Facebook</Link>
                <Box sx={{ maxWidth: '400px', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', m: '10px 0' }} >
                    <div style={{ flex: '1', maxWidth: '110px', height: '1px', backgroundColor: '#ccc', p: 0 }} />
                    <div style={{ margin: '0 10px', fonSize: '16px', color: '#333' }} >or</div>
                    <div style={{ flex: '1', maxWidth: '110px', width: '50%', height: '1px', backgroundColor: '#ccc' }} />
                </Box>
                <Input type='email' name='email' placeholder='Email' onChange={handleChange} sx={{ maxWidth: '270px', width: '100%', fontSize: '13px', p: "5px", m: '5px 0' }} />
                <small style={{ color: 'red' }}>{errorMsg.email}</small>
                <Input type='text' name='fullname' placeholder='Full Name' onChange={handleChange} sx={{ maxWidth: '270px', width: '100%', fontSize: '13px', p: "5px", m: '5px 0' }} />
                <small style={{ color: 'red' }}>{errorMsg.fullname}</small>
                <Input type='text' name='username' placeholder='username' onChange={handleChange} sx={{ maxWidth: '270px', width: '100%', fontSize: '13px', p: "5px", m: '5px 0' }} />
                <small style={{ color: 'red' }}>{errorMsg.username}</small>
                <Input type='password' name='password' placeholder='Password' onChange={handleChange} sx={{ maxWidth: '270px', width: '100%', fontSize: '13px', p: "5px", m: '5px 0' }} />
                <small style={{ color: 'red' }}>{errorMsg.password}</small>
                <Typography sx={{ fontSize: "12px", maxWidth: '270px', textAlign: 'center', m: '5px 0' }}>
                    People who use our service may have uploaded your contact information to Instagram.
                    <Link to='https://www.facebook.com/help/instagram/261704639352628' style={{ textDecoration: 'none', color: '#0095f6' }} target="_blank">Learn More</Link>
                </Typography>
                <Typography sx={{ fontSize: "12px", maxWidth: '270px', textAlign: 'center', m: '5px 0' }}>
                    By signing up, you agree to our  <Link to='https://help.instagram.com/581066165581870/?locale=en_US' style={{ textDecoration: 'none', color: '#0095f6' }} target="_blank">Terms , Privacy Policy and Cookies Policy .</Link>
                </Typography>
                <Button variant="contained" onClick={submit} sx={{
                    maxWidth: "270px", width: "100%", height: '32px', borderRadius: '10px', backgroundColor: '#4bb4f8', mt: '10px', boxShadow: 'none', '&:hover': {
                        backgroundColor: '#4bb4f8', outline: 'none', boxShadow: 'none',
                    },
                }} disabled={isDisabled}>Sign up</Button>
            </Box>
            <Box sx={{ maxWidth: '350px', width: '100%', height: '10vh', backgroundColor: 'white', border: '1px solid rgb(219,219,219)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}   >
                Have an account?&nbsp; <Link to='/' style={{ textDecoration: 'none', fontWeight: '500', color: '#0095f6' }}>Log in</Link>
            </Box>
        </Container>
    )
}

export default Register