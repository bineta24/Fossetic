import React, { useEffect, useState, useRef } from 'react';
import fosseticImg from "../assets/images/fossetic.png";
import {useHistory} from 'react-router-dom'
import PropTypes from 'prop-types';
import Axios from 'axios'
import Auth from "../services/auth";

import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};




const Login = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      Auth.login(email, password).then(
        () => {
          history.push("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };






   


  return (

    <div className="auth-wrapper">
    <div className="auth-content">
        <div className="auth-bg">
            <span className="r"></span>
            <span className="r s"></span>
            <span className="r s"></span>
            <span className="r"></span>
        </div>
        <div className="card">
            <div className="card-body text-center">
                <div className="mb-4">
                <img src={fosseticImg} alt="" className="profile-img-card"/>

                </div>
                <h3 className="mb-4">Login</h3>
                <Form onSubmit={handleLogin} ref={form}> 

                <div className="input-group mb-3">
                    <input type="email" className="form-control" name="email" placeholder="Email"  onChange={e => setEmail(e.target.value)}  validations={[required]} />
                </div>
                <div className="input-group mb-4">
                    <input type="password" className="form-control" name="password"   placeholder="Mot de passe" onChange={e => setPassword(e.target.value)}  validations={[required]} />
              </div>
                <div className="form-group text-left">
                    <div className="checkbox checkbox-fill d-inline">
                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" checked=""/>
                        <label for="checkbox-fill-a1" className="cr"> Se souvenir de moi</label>
                    </div>
                </div>
                
                 <input type="button" onClick={handleLogin} value="Login" />
              
                <p className="mb-2 text-muted">Mot de passe oublié? <a href="auth-reset-password.html">Rejetter</a></p>
                {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
      
      <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>

            </div>
        </div>
    </div>
</div>




);
}







export default Login;
