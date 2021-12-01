const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Permet de créer la base ou la mettre à jour
// sequelize.sync({ force: true }); 
sequelize.sync();

db.commentaires = require("./commentaire.js")(sequelize, Sequelize);
db.posts = require("./post.js")(sequelize, Sequelize,db.commentaire);
db.users = require("./user.js")(sequelize, Sequelize,db.posts,db.commentaire);


module.exports = db;