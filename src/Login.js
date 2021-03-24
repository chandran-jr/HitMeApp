import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';

function Login() {

    const signIn = () => {

    }

    return (
        <div className="login">
        <div className="login__container">


        <img alt= "login__logo" src="data:image/jpeg;base64,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" width = "80px" />

        <div className="login__text">
        <h1>Log In to HitMeApp</h1>
        </div>

            <Button onClick={signIn}>
                Sign in with Google
            </Button>


        </div>          
        </div>
    )
}

export default Login
