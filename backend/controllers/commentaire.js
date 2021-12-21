const models  = require("../models");
const db = require("../models");
const Commentaire = db.commentaires;
const fs = require('fs');


exports.createCommentaire = (req, res) => {
  const commentaire = {
    message: req.body.commentaire,
    userId: req.query.userId
  };
  // Save Commentaire in the database
  models.commentaires.create(commentaire)
  .then(data => {
      res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message: err.message || "Une erreur s'est produite lors de la création du commentaire"
      });
  });
};

exports.getOneCommentaire = (req, res, next) => {

  models.commentaires.findOne({ where: { id: req.params.id}
  
  }).then ( 
    (commentaire) => {
      res.status(200).json(commentaire);
    }
  ).catch(
    (error) => {
      res.status(404).json({ 
        error: error
      });
    }
  );
};

exports.modifyCommentaire = (req, res, next) => {
  models.commentaires.findOne({ where : {id: req.params.id} })
  .then(commentaire => {
    const commentaireObject = req.file ?
    {
      ...commentaire,
      
    } : { ...req.body };
    models.commentaires.update(commentaireObject, {where : {id : req.params.id}})
    .then(() =>  res.status(200).json({ message: 'Objet modifer'}))
    .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};

exports.deleteCommentaire = (req, res, next) => {
  

  models.commentaires.findOne({ where : {id: req.params.id} })
    .then(commentaire => {
      models.commentaires.destroy({ where : {id: req.params.id} })
        .then(() => res.status(200).json({ message: 'Message supprimé !'}))
        .catch(error => res.status(400).json({ error }));

    })
    .catch(error => res.status(500).json({ error }));
};



exports.getAllCommentaire = (req, res, next) => {

  models.commentaires.findAll().then(
    (commentaires) => {
      res.status(200).json(commentaires);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};