module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
      prenom: {
        type: Sequelize.STRING
      },
      nom: {
        type: Sequelize.STRING
      },
      pseudo: {
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      }
    });

    return User;
  };