const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
     
  prenom: { type: String, required: true },
  nom: { type: String, required: true },
email: { type: String, required: true, unique: true },
phone: { type: Number, required: true },
adresse: { type: String, required: true },
password: { type: String, required: true },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    fosses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Fosse"
      }
    ]
  })
);

module.exports = User;

