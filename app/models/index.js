const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.fosse =  require("./fosse.model");

db.ROLES = ["user", "admin", "client"];

module.exports = db;