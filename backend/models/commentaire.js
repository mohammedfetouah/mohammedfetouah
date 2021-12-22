module.exports = (sequelize, Sequelize) => {
    const Commentaire = sequelize.define('commentaire', {
      message: {
        type: Sequelize.TEXT
      },
    });

    // Commentaire.belongsTo(User);
    // Commentaire.belongsTo(Post);
    // Commentaire.hasOne(User);
    // Commentaire.hasOne(Post);

    return Commentaire;
};