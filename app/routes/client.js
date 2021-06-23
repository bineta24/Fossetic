const express = require('express');
const router = new express.Router;
const { verifySignUp } = require("../middlewares");
const User = require("../controllers/user.controller");


const Client = require("../controllers/client");


 module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });


router.get('/',(req,res)=>res.send('ok'));

app.post(
  "/api/cli/signup/:id",
  [
    verifySignUp.checkDuplicateUsernameOrEmail
   
  ],
  Client.signup
);

app.get('/api/cli/getAllCli', Client.getAllCli);
app.get('/api/cli/getOneCli/:id', Client.getOneClient);
app.delete('/api/cli/deleteCli/:id', Client.deleteClient);

 };
