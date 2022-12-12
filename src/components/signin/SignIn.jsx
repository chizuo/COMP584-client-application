import React from 'react'
import './SignInStyles.css'

const SignIn = () => {
    return (
        <div className='signin'>
            <div className="container">
                <div className="form-container">
                    <form>
                        <h1><span>Sign</span> In</h1>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="text" placeholder='Enter your password'/>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
