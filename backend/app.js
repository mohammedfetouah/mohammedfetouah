const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const commentaireRoutes = require('./routes/commentaire');
const path = require('path'); // Permet de récupérer les images 
const cors = require('cors');


app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});



app.use(bodyParser.json()); // Permet de parser le body (ne fonctionne pas quand il y a un fichier)

app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/commentaire', commentaireRoutes);
app.use('/api/post', postRoutes);
app.use('/api/auth', userRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));




module.exports = app;