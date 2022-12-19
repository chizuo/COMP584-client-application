import React from 'react'
import './ForumStyles.css'


const Forum = () => {
    return (
        <div className='forum'>
            <div className="container">
                <div className="content">
                    <h2>Talk about <span> Bikes</span></h2>
                    <p>Biking is a great way to get exercise and explore the outdoors. Whether you prefer to ride on trails, roads, or city streets, there is a bike for every type of terrain and rider!</p>
                    <button><a href="/postbike" className="postbike-page">Post Your Own Bike Here</a></button>
                </div>
            </div>
        </div>
    )
}

export default Forum
