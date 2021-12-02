const { commentaires } = require("../models");
const db = require("../models");
const Commentaire = db.commentaires;
const fs = require('fs');


exports.createCommentaire = (req, res) => {
    // Create a Commentaire
    const commentaire = {
        ...req.body
    };
    // Save Commentaire in the database
    Commentaire.create(commentaire)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Une erreur s'est produite lors de la création du post"
        });
    });
};

exports.getOneCommentaire = (req, res, next) => {
  Commentaire.findOne({ where : { _id: req.params.id}

  }).then(
    (post) => {
      res.status(200).json(post);
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
  Commentaire.findOne({ _id: req.params.id })
  .then(commentaire => {
    const filename = post.imageUrl.split('/images/')[1];
    fs.unlink(`images/${filename}`, () => {
      const comnnetaireObject = req.file ?
      {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } : { ...req.body };
    Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id }) 
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
    });
  })
};

exports.deleteCommentaire = (req, res, next) => {
  Commentaire.findOne({ _id: req.params.id })
    .then(commentaire => {

        Commentaire.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Message supprimé !'}))
            .catch(error => res.status(400).json({ error }));

    })
    .catch(error => res.status(500).json({ error }));
};



exports.getAllCommentaire = (req, res, next) => {
    Commentaire.find().then(
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