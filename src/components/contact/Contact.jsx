import React from 'react'
import './ContactStyles.css'
/*
This component includes the internal page for Contact Us. Accessible 
through the footer section.Contact Us Box will include text fields 
for users to fill out and message us any comments, questions or concerns.
*/
const Contact = () => {
    return (
        <div className='contact'> 
            <div class="contact-box">

                {/*Contact Us Box with text fields */}
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
                    
                        {/*Submit Button*/}
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
