module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('post', {
      message: {
        type: Sequelize.TEXT
      },
      img: {
        type: Sequelize.STRING
      }
    });
  
    return Post;
  };