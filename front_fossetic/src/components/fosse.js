import React, { useEffect, useState } from 'react';

import axios from "axios";



 const Fosse = () => {

    const [name, setName]  = useState("");
    
    const [sensors, setSensors]  = useState([]);
    

  /*useEffect(() => {

    axios.get('https://api.waziup.io/api/v2/devices/FosseticA/')     
    .then(response => {
     const data = response.data;
     console.log(data);

   })
   .catch(e => {       
     console.log(e);
   })
  });*/

  useEffect(() => {
      const fetchData = async () => {
          let res = await axios.get(
              //"https://api.waziup.io/api/v2/devices/FosseticA/",
              "https://api.waziup.io/api/v2/devices/60cb1b5b2c0a1e000778ee9a/",

          );
          res = res.data;
          setName(res.name); 
          
          setSensors(res.sensors);
          console.log(res.data);
      };
      fetchData();
  }, [])
  
  

  return(
    
    
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
                            {sensors.map((sensor) =>
                                <div className="col-md-6 col-xl-4" key={sensor.id}>
                                   
                                    
                                    <div className="card daily-sales">
                                        <div className="card-block">
                                            <h6 className="mb-4">{sensor.name}</h6>
                                            <div className="row d-flex align-items-center">
                                                <div className="col-9">
                                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-10"></i> {Math.round(sensor.value.value)}%</h3>
                                                </div>

                                                <div className="col-3 text-right">
                                                <i class="material-icons" style={{color:'green'}}>&#xe567;</i>
                                                </div>
                                            </div>
                                            <div className="progress m-t-50" style={{height: '7px'}}>
                                                <div className="progress-bar progress-c-theme" role="progressbar" style={{width: Math.round(sensor.value.value)+'%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>  
                                                  
                                  </div>

                                 
  
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                              
                               

                               
                            )}
                                </div>
                        </div>
                    </div>
                
                </div>
            </div>
        
        </div>
    
    </div>

   </div>
                                    
   




              

    )
    
  
}
export default Fosse;












    
