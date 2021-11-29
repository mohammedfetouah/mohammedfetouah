const db = require('../services/db');

// Get All users
exports.getUsers = () => {
    return db.query("SELECT * FROM user");
}
exports.insertUser = (data) => {
    console.log(data);
    return db.query("INSERT INTO user SET ?", [data]);
}

//      
// // Get Single Product
// export const getUsersById = (id, result) => {
//     db.query("SELECT * FROM user WHERE id = ?", [id], (err, results) => {             
//         if(err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results[0]);
//         }
//     });   
// }
//  
// // Insert Product to Database
// export const insertUser = (data, result) => {
//     db.query("INSERT INTO user SET ?", [data], (err, results) => {             
//         if(err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     });   
// }
//  
// // Update Product to Database
// export const updateProductById = (data, id, result) => {
//     db.query("UPDATE user SET prenom = ?, nom = ? WHERE id = ?", [data.product_name, data.product_price, id], (err, results) => {             
//         if(err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     });   
// }
//  
// // Delete Product to Database
// export const deleteProductById = (id, result) => {
//     db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {             
//         if(err) {
//             console.log(err);
//             result(err, null);
//         } else {
//             result(null, results);
//         }
//     });   
// }