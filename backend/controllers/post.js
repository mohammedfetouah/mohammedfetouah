const { posts } = require("../models");
const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;


exports.createPost = (req, res) => {
    // Create a Post
    const post = {
        ...req.body
    };
    // Save Post in the database
    Post.create(post)
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
  Post.findOne({

    _id: req.params.id
    
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
  Post.findOne({ _id: req.params.id })
  .then(post => {
    const filename = post.imageUrl.split('/images/')[1];
    fs.unlink(`images/${filename}`, () => {
      const PostObject = req.file ?
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

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then(sauce => {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};



exports.getAllPost = (req, res, next) => {
    Post.find().then(
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