const User = require('../models/user');


exports.showUsers = (req, res, next) => {
    User.getUsers().then(
        (users) => {
            res.status(200).json(users);
        }
    ).catch(
        (error) => {
            res.status(404).json({
            error: error
        });
    })
};

exports.createUser = (req, res, next) => {
    User.insertUser(req.body).then(
        (users) => {
            res.status(200).json(users);
        }
    ).catch(
        (error) => {
            res.status(404).json({
            error: error
        });
    })
};

 
// // Get Single Product 
// export const showProductById = (req, res) => {
//     getProductById(req.params.id, (err, results) => {
//         if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }
 
// // Create New Product
// export const createProduct = (req, res) => {
//     const data = req.body;
//     insertProduct(data, (err, results) => {
//         if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }
 
// // Update Product
// export const updateProduct = (req, res) => {
//     const data  = req.body;
//     const id    = req.params.id;
//     updateProductById(data, id, (err, results) => {
//         if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }
 
// // Delete Product
// export const deleteProduct = (req, res) => {
//     const id = req.params.id;
//     deleteProductById(id, (err, results) => {
//         if (err){
//             res.send(err);
//         }else{
//             res.json(results);
//         }
//     });
// }