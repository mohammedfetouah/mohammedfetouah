module.exports = (sequelize, Sequelize,Post) => {
    const User = sequelize.define('user', {
      prenom: {
        type: Sequelize.STRING
      },
      nom: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      }
    });
    User.hasMany(Post);
  
    return User;
  };