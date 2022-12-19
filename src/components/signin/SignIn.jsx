import React, { useState } from 'react';
import Axios from 'axios';
import server from '../../config/service';
import Dashboard from '../dashboard/Dashboard'
import './SignInStyles.css';
import {Link} from 'react-router-dom';

/*
This component is the SignIn Page. Accessible through
the NavBar, this page will allow the users to login 
with their credentials with JWT Authentication. Fields
are to be inputted by the user and login. This would
trigger the Conditional Rendering parameters and access 
other logged in features.
*/
const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginState, setLoginState] = useState(false);

    const requestHandler = async(e) => {
        e.preventDefault();
        Axios.get(`${server.host}/v1/account/login`, {
            auth: {
                username: username,
                password: password
            }
        }).then((res) => {
            let result = res.status == 201 ? true : false;
            setLoginState(result);
        });
    }
    return (
        <>
            { loginState ? ( <Dashboard /> ) : (
                <div class="signin-box">
                    <h2>Login</h2>
                    <form>
                        <div class="user-box">
                            <input type="username" name="" required="" onChange={(e) => { setUsername(e.target.value);  }}/>
                            <label>Username</label>
                        </div>
        
                        <div class="user-box">
                            <input type="password" name="" required="" onChange={(e) => { setPassword(e.target.value);  }}/>
                            <label>Password</label>
                        </div>    
                            <button onClick={requestHandler}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Sign In
                        </button>
        
                        <div className="class-box">
                            <h5>Don't have an Account? Register with us today!</h5>
                            <a href="/register" >
                                Register
                            </a>
                        </div>
                    </form>
                </div>
            )
        }
        </>
    )
}

export default SignIn
