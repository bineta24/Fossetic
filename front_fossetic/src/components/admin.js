import React from "react";


function Admin() {
 
    return ( 
     


<div>
      <div className="loader-bg">
      <div className="loader-track">
          <div className="loader-fill"></div>
      </div>
  </div>
  
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
                          
                          <div className="row">
                              
                              <div className="col-md-6 col-xl-4">
                                  <div className="card daily-sales">
                                      <div className="card-block">
                                          <h6 className="mb-4">Nombre de client</h6>
                                          <div className="row d-flex align-items-center">
                                              <div className="col-9">
                                                  <h3 className="f-w-300 d-flex align-items-center m-b-0"> 249</h3>
                                              </div>

                                          </div>
                                      </div>
                                  </div>
                              </div>
                              
                              <div className="col-md-6 col-xl-4">
                                  <div className="card Monthly-sales">
                                      <div className="card-block">
                                          <h6 className="mb-4">Nombre de fosse</h6>
                                          <div className="row d-flex align-items-center">
                                              <div className="col-9">
                                                  <h3 className="f-w-300 d-flex align-items-center  m-b-0"> 200</h3>
                                              </div>
    
                                          </div>

                                          
                                      </div>
                                  </div>
                              </div>
                              < div className="col-md-12 col-xl-4">
                                  <div className="card yearly-sales">
                                      <div className="card-block">
                                          <h6 className="mb-4">Nombre de Fosse pleine</h6>
                                          <div className="row d-flex align-items-center">
                                              <div className="col-9">
                                                  <h3 className="f-w-300 d-flex align-items-center  m-b-0">6</h3>
                                              </div>
                                        
                                          </div>

                                      </div>
                                  </div>
                              </div>
                                <div className="col-xl-8 col-md-6">
                                  <div className="card Recent-Users">
                                      <div className="card-header">
                                          <h5>clients ajoutés recemment</h5>
                                      </div>
                                      <div className="card-block px-0 py-3">
                                          <div className="table-responsive">
                                              <table className="table table-hover">
                                                  <tbody>
                                                      <tr className="unread">
                                                          
                                                          <td>
                                                              <h6 className="mb-1">Bineta DIENG</h6>
                                                          </td>
                                                          <td>
                                                              <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"></i>11 Avril 12:56</h6>
                                                          </td>
                                                          <td><a href="#" className="label theme-bg text-white f-12">Effacer</a></td>
                                                      </tr>
                                                      <tr className="unread">
                                                          
                                                      </tr>
                                                      <tr className="unread">
                                                          <td>
                                                              <h6 className="mb-1">Ibou Ndiaye</h6>
                                                          </td>
                                                          <td>
                                                              <h6 className="text-muted f-w-300"><i className="fas fa-circle text-c-red f-10 m-r-15"></i>19 Avril 12:56</h6>
                                                          </td>
                                                          <td><a href="#" className="label theme-bg text-white f-12">Effacer</a></td>
                                                      </tr>
                                                  
                                                      
                                                  </tbody>
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
  </div>

      
      </div>


    
    );
    

   
                
      

    
  

}

export default Admin
