const  models  = require("../models");
const db = require("../models");
const Post = db.posts;
const fs = require('fs');
const User = models.users;


exports.createPost = (req, res) => {
    const post = {
      message: req.body.message,
      userId: req.query.userId
    };
    if (req.file) {
      post.img =  `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    }

    // Save Post in the database
    models.posts.create(post)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Une erreur s'est produite lors de la création du post"
        });
    });
};

exports.getOnePost = (req, res, next) => {
  

  models.posts.findOne({ where: {id: req.params.id}
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

exports.modifyPost = (req, res, next) => {
  models.posts.findOne({ where : {id: req.params.id} })
  .then(post => {
    const filename = post.img.split('/images/')[1];
    fs.unlink(`/images/${filename}`, () => {
      const postObject = req.file ?
      {
        ...post,
        img: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      } : { ...req.body };
      models.posts.update(postObject, {where : {id : req.params.id}})
      .then(() =>  res.status(200).json({ message: 'Objet modifer'}))
      .catch(error => res.status(400).json({ error }));
    });
  })
  .catch(error => res.status(500).json({ error }));
};

exports.deletePost = (req, res, next) => {
  User.findOne({where: {id: req.query.userId}})
  .then(user => {
    if (user.role == 'admin') {
      models.posts.findOne({where: {id: req.params.id} })
      .then(post => {
        if (post.img) {
          const filename = post.img.split('/images/')[1];
          fs.unlink(`images/${filename}`, () => {
            models.posts.destroy({ where : {id: req.params.id} })
              .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
              .catch(error => res.status(400).json({ error }));
          });
        } else {
          models.posts.destroy({ where : {id: req.params.id} })
              .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
              .catch(error => res.status(400).json({ error }));
        }
      })
      .catch(error => res.status(500).json({ error }));
    } else {
      res.status(403).json("Vous n'êtes pas admin !")
    }
  }).catch(error => res.status(500).json({ error }));
};



exports.getAllPost = (req, res, next) => {
    models.posts.findAll({
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['id', 'prenom', 'nom', 'pseudo']
        }
      ],
    })
    .then(
      (posts) => {
        res.status(200).json(posts);
      }
    ).catch(
      function (error) {
        console.log('test lou');
        console.log(error);
        res.status(400).json({
          error: error
        });
      }
      // (error) => {
      //   res.status(400).json({
      //     error: error
      //   });
      // }
    );
  };

  exports.getPostCommentaires = (req, res, next) => {
    models.commentaires.findAll({ 
        where: {postId: req.params.id},
        include: [
          {
          model: User,
          attributes: ['id', 'prenom', 'nom', 'pseudo']
        }],
        order: [['createdAt', 'DESC']]
      }).then(
      (commentaires) => {
        res.status(200).json(commentaires);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };