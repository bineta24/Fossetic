

import React, { useState, useEffect, useRef, useHistory } from "react";

import Auth from "../services/client";


function Client(props){

    const [clients, setClients] = useState([]);
    const clientsRef = useRef();
    //const history = useHistory();
    clientsRef.current = clients;

    useEffect(() => {
        retrieveClients();
      }, []);

      const retrieveClients = () => {
        Auth.getAllClient()
          .then((response) => {
            setClients(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      };



  const refreshList = () => {
    retrieveClients();
  };
 return (
    
<div>
      <div className="loader-bg">
      <div className="loader-track">
          <div className="loader-fill"></div>
      </div>
  </div>
  
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
                  <a href="client" className="nav-link "><span className="pcoded-micon"> </span><span className="pcoded-mtext">Client</span></a>
                  </li> 

                  </ul>

          </div>
          
 
      </div>
  </nav>
  
  
  <header className="navbar pcoded-header navbar-expand-lg navbar-light">
      <div className="m-header">
          <a className="mobile-menu" id="mobile-collapse1" href="#"><span></span></a>
          <a href="index.html" className="b-brand">
                 <div className="b-bg">
                     <i className="feather icon-trending-up"></i>
                 </div>
                 <span className="b-title">Datta Able</span>
             </a>
      </div>
      <a className="mobile-menu" id="mobile-header" href="#">
          <i className="feather icon-more-horizontal"></i>
      </a>
      <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
              <li><a href="#" className="full-screen" ><i className="feather icon-maximize"></i></a></li>
              
              <li className="nav-item">
                  <div className="main-search">
                      <div className="input-group">
                          <input type="text" id="m-search" className="form-control" placeholder="Search . . ."/>
                          <a href="#" className="input-group-append search-close">
                              <i className="feather icon-x input-group-text"></i>
                          </a>
                          <span className="input-group-append search-btn btn btn-primary">
                              <i className="feather icon-search input-group-text"></i>
                          </span>
                      </div>
                  </div>
              </li>
          </ul>
          <ul className="navbar-nav ml-auto">
              <li>
                  <div className="dropdown">
                      <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i className="icon feather icon-bell"></i></a>
                      <div className="dropdown-menu dropdown-menu-right notification">
                          <div className="noti-head">
                              <h6 className="d-inline-block m-b-0">Notifications</h6>
                              <div className="float-right">
                                  <a href="#" className="m-r-10">mark as read</a>
                                  <a href="#">clear all</a>
                              </div>
                          </div>
                          <ul className="noti-body">
                              <li className="n-title">
                                  <p className="m-b-0">NEW</p>
                              </li>
                              <li className="notification">
                                  <div className="media">
                                      <img className="img-radius" src="assets/images/user/avatar-1.jpg" alt="Generic placeholder image"/>
                                      <div className="media-body">
                                          <p><strong>John Doe</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                          <p>New ticket Added</p>
                                      </div>
                                  </div>
                              </li>
                              <li className="n-title">
                                  <p className="m-b-0">EARLIER</p>
                              </li>
                              <li className="notification">
                                  <div className="media">
                                      <img className="img-radius" src="assets/images/user/avatar-2.jpg" alt="Generic placeholder image"/>
                                      <div className="media-body">
                                          <p><strong>Joseph William</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                          <p>Prchace New Theme and make payment</p>
                                      </div>
                                  </div>
                              </li>
                              <li className="notification">
                                  <div className="media">
                                      <img className="img-radius" src="assets/images/user/avatar-3.jpg" alt="Generic placeholder image"/>
                                      <div className="media-body">
                                          <p><strong>Sara Soudein</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
                                          <p>currently login</p>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                          <div className="noti-footer">
                              <a href="#">show all</a>
                          </div>
                      </div>
                  </div>
              </li>
              <li>
                  <div className="dropdown drp-user">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" >
 
                          <i className="icon feather icon-settings"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right profile-notification">
                          <div className="pro-head">
                              <span>Bineta</span>
                              <a href="login" className="dud-logout" title="Logout">
                                  <i className="feather icon-log-out"></i>
                              </a>
                          </div>
                          <ul className="pro-body">
                              <li><a href="#" className="dropdown-item"><i className="feather icon-user"></i> Profil</a></li>
                              <li><a href="login" className="dropdown-item"><i className="feather icon-lock"></i> Lock Screen</a></li>
                          </ul>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
  </header>
 
  <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                   

                     <div className="main-body">
                        <div className="page-wrapper">
  
    <div className="container-xl" >
  <div className="table-responsive">
      <div className="table-wrapper">
          <div className="table-title">
              <div className="row">
                  <div className="col-sm-8"><h2> <b>Details</b> Client</h2></div>
                  <div className="col-sm-4 text-left">
                      <div className="search-box">
                    
                          <i className="material-icons">&#xE8B6;</i>
                          
                          <input type="text" className="form-control" placeholder="Search"/>
                          
           
                          
                      </div>
                  </div>
              </div>
          </div>

         
          <table className="table table-striped table-hover table-bordered">
            
            <thead>

        

                  <tr>
                      <th>id</th>
                      <th> Prénom </th>
                      <th>Nom</th>
                      <th>Email</th>
                      <th>Téléphone</th>
                      <th>Adresse</th>
                      
                      <th>Actions</th>
                  </tr>
                  </thead>


                  {clients &&
            clients.map((client, index) => (       
              <tbody>

                  <tr>

                 
                      <td>{client._id}</td>
                      <td>{client.prenom} </td>
                      <td>{client.nom}</td>
                      <td>{client.email}</td>
                      <td>{client.adresse}</td>
                      <td>{client.phone}</td>
                  
                
           


                     
                      
                      <td>
                        
                          <a href="detailsFosse" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></a>
                          <a  className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                          <a  className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                          

                  
                          </td>
                  
                  </tr>
                 
                  
              </tbody>
            ))}
          </table>
          
         
      </div>
  </div>  
  </div>  
  </div> 
  </div>
  </div>  
  </div>  
  </div> 
  </div>
  </div>  
  
  





  );
   
}
export default Client;