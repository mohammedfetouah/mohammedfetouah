module.exports = (sequelize, Sequelize) => {
    const Commentaire = sequelize.define('commentaire', {
      message: {
        type: Sequelize.TEXT
      },
    });

    return Commentaire;
};