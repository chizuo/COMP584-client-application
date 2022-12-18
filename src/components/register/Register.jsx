import React from 'react'
import './RegisterStyles.css'

/*
This component is the Register Page. Accessible through the Login Page as 
an addition button option aside from being able to login. Users are 
rerouted to this page and prompted to fill in the required fields.
*/
const Register = () => {
    return (
        <div class="register-box">
            <h2>Create an Account</h2>
            <form>
                <div class="user-box">
                    <input type="firstName" name="" required=""/>
                    <label>First Name</label>
                </div>

                <div class="user-box">
                    <input type="lastName" name="" required=""/>
                    <label>Last Name</label>
                </div>

                <div class="user-box">
                    <input type="userEmail" name="" required=""/>
                    <label>E-Mail</label>
                </div>

                <div class="user-box">
                    <input type="username" name="" required=""/>
                    <label>Username</label>
                </div>

                <div class="user-box">
                    <input type="password" name="" required=""/>
                    <label>Password</label>
                </div>

                    <a href="/signin">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Register
                    </a>
            </form>
        </div>

    )
}

export default Register
