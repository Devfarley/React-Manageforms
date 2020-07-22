import React from 'react';
import { ForgotPassForm } from '../config/Forms';

function ForgotPass(props) {
    return (
    <div>   
        <h2>Forgot Password</h2>
        <ForgotPassForm userForgotPass={(email, password) => props.userForgotPass(email, password)}/>
    </div> 
    );
}

export default ForgotPass;