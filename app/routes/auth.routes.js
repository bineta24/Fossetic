const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
  app.get('/api/auth/:id/getOneUser', controller.getOneUser);
  app.get('/api/auth/getAllUser', controller.getAllUser);
  app.delete('/api/auth/:id/deleteUser', controller.deleteUser);
  app.put('/api/auth/:id/modifyUser', controller.modifyUser);

};
