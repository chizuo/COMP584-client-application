import React from 'react'
import './ContactStyles.css'

const Contact = () => {
    return (
        <div className='contact'> 
            <div class="contact-box">
                <h2>Contact<span> Us</span></h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="" required=""/>
                        <label>Name</label>
                    </div>

                    <div class="user-box">
                        <input type="email" name="" required=""/>
                        <label>Email</label>
                    </div>

                    <div class="user-box">
                        <textarea type="textarea" name="" required=""/>
                        <label>Message</label>
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
        </div>
    )
}

export default Contact
