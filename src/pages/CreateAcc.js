import React from 'react';
import {CreateAccountForm} from '../config/Forms'

function CreateAcc(props) {
    return (
    <div>
        <h2>Create Account</h2>
        <CreateAccountForm addUser={user=> props.addUser(user)}/>
    </div>
    );
}

export default CreateAcc;