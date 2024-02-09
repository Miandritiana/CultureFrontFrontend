import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Stack
} from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

const AuthLogin = ({ title, subtitle, subtext }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
        // Make an HTTP POST request to your Spring Boot login endpoint
        fetch(`https://culturebackoffice-production.up.railway.app/users/checkLoginMobile?username=${username}&password=${password}`)
            .then(response => {
                if (!response.ok) {
                    window.location.href = "/auth/login";
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Handle the response from the backend (e.g., set user authentication state)
                console.log(data);
                if (data > 1) {
                    localStorage.setItem('userId', data);
                    window.location.href = "/dashboard";
                } else {
                    window.location.href = "/auth/login";
                    console.error('Login failed. Please check your credentials.');
                }
            })
            .catch(error => {
                // Handle errors (e.g., show an error message to the user)
                console.error('Misy Error ----------- during login request:', error);
            });
    };

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}

            <Stack>
                <Box>
                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='username' mb="5px">Username</Typography>
                    <CustomTextField id="username" variant="outlined" fullWidth value={username} onChange={(e) => setUsername(e.target.value)} />
                </Box>
                <Box mt="25px">
                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='password' mb="5px" >Password</Typography>
                    <CustomTextField id="password" type="password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
                </Box>
                <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                </Stack>
            </Stack>
            <Box>
                <Button
                    onClick={handleLogin}
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    type="submit"
                >
                    Sign In
                </Button>
            </Box>
            {subtitle}
        </>
    );
};

export default AuthLogin;
