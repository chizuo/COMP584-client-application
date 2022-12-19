<<<<<<< Updated upstream
import React, { useContext } from 'react';
import AuthContext from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
=======
import React, { useState } from 'react';
>>>>>>> Stashed changes
import { FaLock, FaUser, FaRegListAlt } from 'react-icons/fa';
import './DashboardStyles.css';

/*
User Dashboard (My Account) Page intitialized displaying 
appropriate fields. Users will also see their most recent posts.
*/
<<<<<<< Updated upstream
const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  
=======
function Dashboard() {
  const [selectedOption, setSelectedOption] = useState('');
    const [showForm, setShowForm] = useState(true);
    const [showSection] = useState(true);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(true);
    }
 

>>>>>>> Stashed changes
  return (

    <div className="user-dashboard">
<<<<<<< Updated upstream
    <h1>User Dashboard</h1>
=======
        <h1>User Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <label className="dropdown-menu-name">
          Account Features:  
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="form1">Change Password</option>
            <option value="form2">Change Information</option>
            <option value="section1">Recent Posts</option>
          </select>
        </label>
      </form>
      {showForm && selectedOption === 'form1' && <Form1 />}
      {showForm && selectedOption === 'form2' && <Form2 />}
      {showSection && selectedOption === 'section1' && <Section1 />}
      
    </div>
>>>>>>> Stashed changes

  );
}

function Form1() {
    return (
    <div className="user-dashboard">    
        <form className="password-section">
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
        </form>
            <button type="submit">Change Password</button>
    </div>
  );
}

function Form2() {
    return (
    <div className="user-dashboard">
        <form className="profile-section">
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
        </form>  
            <button type="submit">Save Changes</button>
    </div>
<<<<<<< Updated upstream
  )
};
=======
  );
}

function Section1() {
    return (
    <div className="user-dashboard">        
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
                </ul>
            </section>
            <button><a href="/postbike" >Post a Bike</a></button>
    </div>
  );
}


>>>>>>> Stashed changes

export default Dashboard;
