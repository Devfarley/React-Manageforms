import React from 'react';
import { LoginForm } from '../config/Forms';

function Login(props) {
    return (
    <div>
        <h2>Login</h2>
        <LoginForm  userLogin={email => props.userLogin(email)}/>
    </div>
    );
}

export default Login;