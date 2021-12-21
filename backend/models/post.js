module.exports = (sequelize, Sequelize, User) => {
    const Post = sequelize.define('post', {
      message: {
        type: Sequelize.TEXT
      },
      img: {
        type: Sequelize.STRING
      }
    });
    Post.belongsTo(User);
    return Post;
};