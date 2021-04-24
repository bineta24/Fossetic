const express = require('express');
const router = new express.Router;

const User = require("../controllers/user.controller");
 const Fosse = require("../controllers/fosse.controller");

 module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });


router.get('/',(req,res)=>res.send('ok'));
// user routes
//app.post('/user/create', User.create);

//app.post('/user/find/fosse/:id', User.fossesByUser);
// post routes
app.post('/fosse/create/:id', Fosse.create);
app.post('/fosse/populate/:id',Fosse.userByFosse);





 };