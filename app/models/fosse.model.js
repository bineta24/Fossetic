const mongoose = require("mongoose");

const Fosse = mongoose.model(
  "Fosse",
  new mongoose.Schema({
    matricule:  { type: String, required: true },
    capacité:  { type: String, required: true },
    position: { type: String, required: true },
    étatFosse: { type: String, required: true },
    createdAt: Date,
    user: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
  })
);

module.exports = Fosse;