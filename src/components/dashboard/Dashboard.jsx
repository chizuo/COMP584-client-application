import React, { useContext, useState } from 'react';
import AuthContext from '../../context/AuthProvider';
import server from '../../config/service';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUser, FaRegListAlt } from 'react-icons/fa';
import './DashboardStyles.css';
import Axios from 'axios';

/* 
User Dashboard (My Account) Page intitialized displaying 
appropriate fields. Users will also see their most recent posts.
*/ 
function Dashboard() {
  const { auth } = useContext(AuthContext);
  window.localStorage.setItem("token", auth.token);
  window.localStorage.setItem("user", auth.username);
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
 

  return (
    <div className="user-dashboard">
        <h1>User Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <label className="dropdown-menu-name">
          Account Features: 
          <select value={selectedOption} onChange={handleOptionChange}>
            <option></option>
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

  );
}

function Form1() {
  const [systemMsg,setSystemMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [password,setPassword] = useState("");
  const [newpw,setNewPw] = useState("");
  const [confirm,setConfirm] = useState("");
  const { auth } = useContext(AuthContext);

  let requestHandler = (e) => {
    e.preventDefault();
    if(newpw == confirm)
    {
      const data = { username: auth.username, password: password, newpw: newpw }
      let config = { headers: { Authorization: "Bearer " + auth.token }}
      Axios.put(`${server.host}/v1/account/updatePassword`, data, config)
        .then( res => {
          let result = res.status === 200 ? true : false;
          setSuccess(result);
          setSystemMsg("password successfully changed");
          setPassword('');
          setNewPw('');
          setConfirm('');
        }).catch(err => setSystemMsg(err));
    }
  }
  
  return (
      <div className="user-dashboard">    
        <form className="password-section">
            <div className="input-group">
                <FaLock className="input-icon" />
                <label htmlFor="current-password">Current Password: </label>
                <input type="password" value={password} id="current-password" onChange={(e) => { setPassword(e.target.value);  }}/>
            </div>
            <div className="input-group">
                <FaLock className="input-icon" />
                <label htmlFor="new-password">New Password: </label>
                <input type="password" value={newpw} id="new-password" onChange={(e) => { setNewPw(e.target.value);  }}/>
            </div>
            <div className="input-group">
                <FaLock className="input-icon" />
                <label htmlFor="confirm-password">Confirm Password: </label>
                <input type="password" value={confirm} id="confirm-password" onChange={(e) => { setConfirm(e.target.value);  }}/>
            </div>
        </form>
        <button onClick={requestHandler}>Change Password</button>
        <p className={systemMsg ? "system" : "offscreen"} aria-live="assertive">{systemMsg}</p>
      </div>
  );
}

function Form2() {
  const [success, setSuccess] = useState(false);
  const [email,setEmail] = useState("");
  const [systemMsg,setSystemMsg] = useState("");
  const [firstname,setFirstName] = useState("");
  const [lastname,setLastName] = useState("");
  const { auth } = useContext(AuthContext);
  const data = { username: auth.username, firstName: firstname, lastName: lastname, email: email }
  let config = { headers: { Authorization: "Bearer " + auth.token }}
  
  let requestHandler = (e) => {
    e.preventDefault();
    Axios.put(`${server.host}/v1/account/updateInfo`, data, config)
    .then(res => {
      let result = res.status === 200 ? true : false;
      setSuccess(result);
      setFirstName('');
      setLastName('');
      setEmail('');
      setSystemMsg('Info successfully updated');
    }).catch( err => setSystemMsg(err) )
  }
  
  return (
    <div className="user-dashboard">
      <form className="profile-section" onSubmit={requestHandler}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <label htmlFor="lastname">First Name: </label>
            <input type="text" value={firstname} id="firstname" onChange={(e) => { setFirstName(e.target.value);  }}/>
          </div>
          <div className="input-group">
            <FaUser className="input-icon" />
            <label htmlFor="lastname">Last Name: </label>
            <input type="text" value={lastname} id="lastname" onChange={(e) => { setLastName(e.target.value);  }}/>
          </div>
          <div className="input-group">
            <FaUser className="input-icon" />
            <label htmlFor="email">Email: </label>
            <input type="email" value={email} id="email" onChange={(e) => { setEmail(e.target.value);  }}/>
          </div>
      </form>  
      <button type="submit" onClick={requestHandler}>Save Changes</button>
      <p className={systemMsg ? "system" : "offscreen"} aria-live="assertive">{systemMsg}</p>
    </div>
  )
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



export default Dashboard;
