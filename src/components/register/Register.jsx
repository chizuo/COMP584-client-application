import React, { useState, useContext } from 'react';
import Axios from 'axios';
import server from '../../config/service';
import AuthContext from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import './RegisterStyles.css';

const Register = () => {
    const [zipcode, setZipcode] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginState, setLoginState] = useState(false);
    const [systemMsg, setSystemMsg] = useState("");
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const requestHandler = async(e) => {
        e.preventDefault();
        Axios.post(`${server.host}/v1/account/register`, {
            zipCode: zipcode,
            firstName: firstname,
            lastName: lastname,
            email: email,
            username: username,
            password: password
        }).then((res) => {
            let result = res.status === 200 ? true : false;
            setAuth({ id: res.data.id, username: res.data.username, token: res.data.token });
            setLoginState(result);
        }).catch((err) => {
            setSystemMsg("username or email is already in use");
        });
    }

    return (
        <>
            { loginState ? navigate("/dashboard") : (
                <div class="register-box">
                <h2>Create an Account</h2>
                    <form>
                        <div class="user-box">
                            <input type="number" name="" required="" onChange={(e) => { setZipcode(e.target.value); }}/>
                            <label>Zip Code</label>
                        </div>
                        
                        <div class="user-box">
                            <input type="firstName" name="" required="" onChange={(e) => { setFirstname(e.target.value); }}/>
                            <label>First Name</label>
                        </div>
        
                        <div class="user-box">
                            <input type="lastName" name="" required="" onChange={(e) => { setLastname(e.target.value); }}/>
                            <label>Last Name</label>
                        </div>
        
                        <div class="user-box">
                            <input type="userEmail" name="" required="" onChange={(e) => { setEmail(e.target.value); }}/>
                            <label>E-Mail</label>
                        </div>
        
                        <div class="user-box">
                            <input type="username" name="" required="" onChange={(e) => { setUsername(e.target.value); }}/>
                            <label>Username</label>
                        </div>
        
                        <div class="user-box">
                            <input type="password" name="" required="" onChange={(e) => { setPassword(e.target.value); }}/>
                            <label>Password</label>
                        </div>

                        <div class="user-box">
                            <button onClick={requestHandler}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <a href="/dashboard" >
                                Register
                            </a>
                            </button>
                            <p className={systemMsg ? "system" : "offscreen"} aria-live="assertive">{systemMsg}</p>
                        </div>
                    </form>
                </div>
                )
            }
        </>
    )
}

export default Register
