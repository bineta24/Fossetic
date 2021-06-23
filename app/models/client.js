const mongoose = require("mongoose");

const Client = mongoose.model(
  "Client",
  new mongoose.Schema({
     
  prenom: { type: String, required: true },
  nom: { type: String, required: true },
email: { type: String, required: true, unique: true },
phone: { type: Number, required: true },
adresse: { type: String, required: true },
password: { type: String, required: true },
user: 
{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

   
  })
);

module.exports = Client;

