import './App.css';
import Login from './components/login'
import Admin from './components/admin'
import User from './components/user'
import Client from './components/client'
import  Fosse from './components/fosse'
import  AddUser from './components/addUser'
import Profile from "./components/profile";
import  EditUser from './components/editUser'
import React, { useState, useEffect } from "react";
import Auth from "./services/auth";
import {Dropdown} from 'react-bootstrap';


import "./assets/css/style.css"



import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showClientBoard, setShowClientBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  

  useEffect(() => {
    const user = Auth.getCurrentUser();

    if (user) {
      
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setShowClientBoard(user.roles.includes("ROLE_CLIENT"));
    }
  }, []);

  const logOut = () => {
    Auth.logout();
  };

  


  
  return (

  <div>
    {showAdminBoard && (
    <nav className="pcoded-navbar">
    <div className="navbar-wrapper">
        <div className="navbar-brand header-logo">
            <a href="admin" className="b-brand">
                <div className="b-bg">
                    <i className="feather icon-trending-up"></i>
                </div>
                <span className="b-title">FosseticApp</span>
            </a>
        </div>
        <div className="navbar-content scroll-div">
        <ul className="nav pcoded-inner-navbar">

        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item active">
        <a href="user" className="nav-link "><span className="pcoded-micon"></span><span className="pcoded-mtext">Utilisateur </span></a>
                </li> 
                <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item active">
                <a href="/login" className="nav-link "><span className="pcoded-micon"> </span><span className="pcoded-mtext">Client</span></a>
                </li> 

                </ul>
               
        </div>
        

    </div>
</nav>
    )}

{showClientBoard && (
    <nav className="pcoded-navbar">
    <div className="navbar-wrapper">
        <div className="navbar-brand header-logo">
            <a href="admin" className="b-brand">
                <div className="b-bg">
                    <i className="feather icon-trending-up"></i>
                </div>
                <span className="b-title">FosseticApp</span>
            </a>
        </div> 
        <div className="navbar-content scroll-div">
        <ul className="nav pcoded-inner-navbar">

        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item active">
        <a href="fosse" className="nav-link "><span className="pcoded-micon"></span><span className="pcoded-mtext">Mes fosses </span></a>
                </li> 
                

                </ul>

        </div>
        

    </div>
</nav>
    )}



      
    





   
    <Router>

          <Switch>
             
              <Route  path="/login" component={Login} />
              <Route  path="/admin" component={Admin} />
              <Route  path="/user" component={User} />
              <Route  path="/fosse" component={Fosse} />
              <Route  path="/client" component={Client} />
              <Route  path="/addUser" component={AddUser} />
              <Route  path="/editUser" component={EditUser} />
              <Route  path="/profile" component={Profile} />
             

             

             
            </Switch>
        
      </Router>
      </div>
  );
}

export default App;
