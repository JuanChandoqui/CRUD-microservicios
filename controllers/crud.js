const conexion = require('../database/db')

exports.save = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    conexion.query('INSERT INTO user SET ?', {username:username, email: email}, (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    });
}


exports.update = (req, res) => {
    const id = req.body.id;
    const username = req.body.username;
    const email = req.body.email;

    conexion.query('UPDATE user SET ? WHERE id=?', [{username:username, email:email}, id], (error, results) =>{
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    });
}