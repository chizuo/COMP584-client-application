import React, { useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUser, FaRegListAlt } from 'react-icons/fa';
import './DashboardStyles.css';

/*
User Dashboard (My Account) Page intitialized displaying 
appropriate fields. Users will also see their most recent posts.
*/
const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  
  return (
    <div className="user-dashboard">
    <h1>User Dashboard</h1>

      <section className="password-section">
        <h2>Change Password</h2>
        <form>
          <div className="input-group">
            <FaLock className="input-icon" />
            <label htmlFor="current-password">Current Password: </label>
            <input type="password" id="current-password" />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <label htmlFor="new-password">New Password: </label>
            <input type="password" id="new-password" />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <label htmlFor="confirm-password">Confirm Password: </label>
            <input type="password" id="confirm-password" />
          </div>
          <button type="submit">Change Password</button>
        </form>
      </section>

      <section className="profile-section">
        <h2>Edit Profile</h2>
        <form>
          <div className="input-group">
            <FaUser className="input-icon" />
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" />
          </div>
          <div className="input-group">
            <FaUser className="input-icon" />
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </section>

      <section className="posts-section">
        <h2>Recent Posts</h2>
        <ul>
          <li>
            <FaRegListAlt className="post-icon" />
            Post 1
          </li>
          <li>
            <FaRegListAlt className="post-icon" />
            Post 2
          </li>
          <li>
            <FaRegListAlt className="post-icon" />
            Post 3
          </li>
          <div className="class-box">
                    <a href="/postbike" >
                        Post a Bike
                    </a>
                </div>
        </ul>
      </section>
    </div>
  )
};

export default Dashboard;
