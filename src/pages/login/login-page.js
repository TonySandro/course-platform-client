import React from 'react';
import LoginComponent from '../../components/Login/login.js';
import InitialNavBar from '../../components/InitialNavBar/InitialNavBar.js';

const LoginPage = () => {
    return (
        <>
            <InitialNavBar />
            <LoginComponent  />
        </>
    )
}

export default LoginPage;