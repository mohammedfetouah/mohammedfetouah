const { users } = require("../models");
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.signup = (req, res) => {
    // Create a User
    const user = {
        ...req.body
      };
      // Save User in the database
      User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la création de l'utilisateur"
            });
        });
};

// Retrieve all Users from the database.
exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Une erreur s'est produite lors de la récupération des utilisateurs"
        });
    });
};

// // Find a single User with an id
// exports.findOne = (req, res) => {
  
// };

// // Update a User by the id in the request
// exports.update = (req, res) => {
  
// };

// // Delete a User with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// // Delete all Users from the database.
// exports.deleteAll = (req, res) => {
  
// };

// // Find all published Users
// exports.findAllPublished = (req, res) => {
  
// };