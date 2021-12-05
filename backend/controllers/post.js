const models = require("../models");
const db = require("../models");
const Post = db.posts;
const fs = require('fs');




exports.createPost = (req, res) => {
    const post = {
      message: req.body.message,
      img: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
      userId: req.body.userId
    };
    console.log(post);
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
  models.posts.findOne({ where: { email: req.body.email}
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
    });
  })
};

exports.deletePost = (req, res, next) => {
  models.posts.findOne({where: {id: req.params.id} })
    .then(post => {
      console.log(post)
      const filename = post.img.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        models.posts.destroy({ where : {id: req.params.id} })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};



exports.getAllPost = (req, res, next) => {

    models.posts.findAll().then(
      (posts) => {
        res.status(200).json(posts);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };