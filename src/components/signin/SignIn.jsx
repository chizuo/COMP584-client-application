import React, { useState } from 'react';
import Axios from 'axios';
import server from '../../config/service';
import './SignInStyles.css';
import {Link} from 'react-router-dom';


const SignIn = () => {
    const [username, getUsername] = useState("");
    const [password, getPassword] = useState("");

    const login = () => {
        Axios.get(`${server.local.host}/v1/account/login`, {
            auth: {
                username: username,
                password: password
            }
        }).then((res) => {
            console.log(res.data);
        });
    }
    return (
        <div class="signin-box">
            <h2>Login</h2>
            <form>
                <div class="user-box">
                    <input type="username" name="" required="" onChange={(e) => { getUsername(e.target.value);  }}/>
                    <label>Username</label>
                </div>

                <div class="user-box">
                    <input type="password" name="" required="" onChange={(e) => { getPassword(e.target.value);  }}/>
                    <label>Password</label>
                </div>

                    <button onClick={login}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    SignIn
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

export default SignIn
