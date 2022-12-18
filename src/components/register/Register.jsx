import React from 'react'
import './RegisterStyles.css'


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
