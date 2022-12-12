import React from 'react'
import './SignInStyles.css'


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
                    Submit
                    </a>
            </form>
        </div>

    )
}

export default SignIn
