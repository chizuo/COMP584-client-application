import React, { useState, useContext } from 'react';
import Axios from 'axios';
import server from '../../config/service';
import AuthContext from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import './SignInStyles.css';

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
    const [systemMsg, setSystemMsg] = useState("");
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
            let result = res.status === 201 ? true : false;
            console.log(res.data)
            setAuth({ id: res.data.id, username: res.data.username, token: res.data.token });
            setLoginState(result);
        }).catch((err) => {
            setLoginState(false);
            setSystemMsg("invalid combination");
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
                        <div className="user-box">
                            <button onClick={requestHandler}>
                                Signin
                            </button>
                        </div>
                        
                        <p className={systemMsg ? "system" : "offscreen"} aria-live="assertive">{systemMsg}</p>
                        <div className="class-box">
                            <h5>Don't have an Account? Register with us today!</h5>
                            <div class="user-box">
                            <button>
                               <a href="/register">Register</a>    
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default SignIn
