const multer = require('multer');


console.log('23')

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

console.log('25')

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null,'images');
  },
  filename: (req, file, callback) => {
    console.log('26')
    const name = file.originalname.split(' ').join('_').split('.').slice(0, -1);
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('image');