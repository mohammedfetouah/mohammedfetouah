module.exports = (sequelize, Sequelize, Commentaire) => {
    const Post = sequelize.define('post', {
      message: {
        type: Sequelize.TEXT
      },
      img: {
        type: Sequelize.STRING
      }
    });
    // Post.belongsTo(User);
    Post.hasMany(Commentaire);
    return Post;
};