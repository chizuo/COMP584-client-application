import React, { useState } from 'react';
import Axios from 'axios';
import server from '../../config/service';
import Dashboard from '../dashboard/Dashboard'
import './RegisterStyles.css';

const Register = () => {
    const [zipcode, setZipcode] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginState, setLoginState] = useState(false);

    const requestHandler = async(e) => {
        e.preventDefault();
        Axios.post(`${server.host}/v1/account/register`, {
            zipcode: zipcode,
            firstname: firstname,
            lastname: lastname,
            email: email,
            username: username,
            password: password
        }).then((res) => {
            let result = res.status == 200 ? true : false;
            setLoginState(result);
        });
    }

    return (
        <>
            { loginState ? ( <Dashboard /> ) : (
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
                            <button onClick={requestHandler}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Register
                            </button>
                    </form>
                </div>
                )
            }
        </>
    )
}

export default Register
