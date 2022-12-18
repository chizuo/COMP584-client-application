import React from 'react'
import './SignInStyles.css'
import {Link} from 'react-router-dom'


const SignIn = () => {
    return (
        <div class="signin-box">
            <h2>Login</h2>
            <form>
                <div class="user-box">
                    <input type="username" name="" required=""/>
                    <label>Username</label>
                </div>

                <div class="user-box">
                    <input type="password" name="" required=""/>
                    <label>Password</label>
                </div>

                    <a href="/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    SignIn
                </a>

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
