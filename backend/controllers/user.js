const { users } = require("../models");
const db = require("../models");
const User = db.users;
const bcrypt = require('bcrypt');
var passwordValidator = require('password-validator');
const jwt = require('jsonwebtoken');




exports.signup = (req, res, next) => {
    var schema = new passwordValidator();
    schema
    .is().min(8)                        
    .is().max(100)                        
    .has().uppercase()                             
    .has().lowercase()                             
    .has().digits(2)                               
    .has().not().spaces()                     
    .is().not().oneOf(['Passw0rd', 'Password123']);
    console.log(req.body.password);
    if(schema.validate(req.body.password)) {
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
          const user = new User({
            email: req.body.email,
            password: hash,
            pseudo: req.body.pseudo,
            prenom: req.body.prenom,
            nom: req.body.nom,
            role: 'user'
          });
          user.save()
            .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
            .catch(error => res.status(400).json({ message : "erreur lors de la creation de l'utilisateur"}));
      })
      .catch(error => res.status(500).json({ error }));
  
    } else {
      res.status(400).json({message : 'mauvais format du mot de passe'});
    }
};

exports.login = (req, res, next) => {
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user.id,
              role : user.id,
              token: jwt.sign(

                { userId: user.id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              ),
              nom: user.nom,
              prenom: user.prenom,
              pseudo: user.pseudo,
              email: user.email,
              role: user.role,
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };



