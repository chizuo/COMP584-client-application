import React, { useState, useContext } from 'react';
import Axios from 'axios';
import server from '../../config/service';
import AuthContext from '../../context/AuthProvider';
import Dashboard from '../dashboard/Dashboard';
import { useNavigate } from 'react-router-dom';
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
    const [errorMessage, setError] = useState("");
    const [loginState, setLoginState] = useState(false);
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const requestHandler = async(e) => {
        e.preventDefault();
        Axios.get(`${server.host}/v1/account/login`, {
            auth: {
                username: username,
                password: password
            }
        }).then((res) => {
<<<<<<< Updated upstream
            let result = res.status == 201 ? true : false;
            setAuth({ user: res.data.username, token: res.data.token });
=======
            let result = res.status === 201 ? true : false;
>>>>>>> Stashed changes
            setLoginState(result);
        }).catch((err) => {
            setError(err);
        });
    }
    return (
        <>
            { loginState ? navigate("/dashboard") : (
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
                            <a href="/signin" >
                                Signin
                            </a>
                        </button>
        
                        <div className="class-box">
                            <h5>Don't have an Account? Register with us today!</h5>
                            <button>
                               <a href="/register">Register</a>    
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default SignIn
