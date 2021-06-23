import axios from "axios";


const API_URL = "http://localhost:8080/api/cli/";

const register = (prenom, nom, email, adresse, phone, password) => {
  return axios.post(API_URL + "signup", {
    prenom,
    nom,
    email,
    adresse,
    phone,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const getAllClient= () => {
  return axios.get(API_URL + "getAllCli");
};
const remove = (id) => {
  return axios.delete(API_URL + `${id}/deleteUser`);
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  getAllClient,
  remove,
};





  

