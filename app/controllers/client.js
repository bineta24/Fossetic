const config = require("../config/auth.config");
const db = require("../models");
const Client = db.client;



var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

    exports.signup = (req, res, next) => {
        user = req.params;
        id = user.id;
        bcrypt.hash(req.body.password, 10)
          .then(hash => {
            const client = new Client({
                prenom: req.body.prenom,
                nom: req.body.nom,
                email: req.body.email,
                phone: req.body.phone,
                adresse: req.body.adresse,
            password: bcrypt.hashSync(req.body.password, 8),
            user:id
             
              
            });
            client.save()
              .then(() => res.status(201).json({ message: 'Client créé !' }))
              .catch(error => res.status(400).json({ error }));
          })
          .catch(error => res.status(500).json({ error }));
      };
      
      exports.getAllCli = (req, res, next) => {
        Client.find().then(
          (clients) => {
            res.status(200).json(clients);
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      };

      exports.getOneClient = (req, res, next) => {
        Client.findOne({
          _id: req.params.id
        }).then(
          (client) => {
            res.status(200).json(client);
          }
        ).catch(
          (error) => {
            res.status(404).json({
              error: error
            });
          }
        );
      };

      exports.deleteClient = (req, res, next) => {
        const id = req.params.id;
        Client.findByIdAndRemove(id)
          .then(data => {
            if (!data) {
              res.status(404).send({
                message: `Cannot delete Client with id=${id}. Maybe Client was not found!`
              });
            } else {
              res.send({
                message: "Le client a été supprimé avec succès!"
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete Client with id=" + id
            });
          });
      };
