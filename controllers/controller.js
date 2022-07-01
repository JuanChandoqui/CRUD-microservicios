const database = require('../database/db');

const initDatabase = (req, res) => {
 const sqlQuery =  'CREATE TABLE IF NOT EXISTS user(id int AUTO_INCREMENT, username VARCHAR(50), email VARCHAR(50), PRIMARY KEY(id))';

database.query(sqlQuery, (err) => {
    if (err) throw err;
    res.redirect('/index');
});
};

module.exports = {
    initDatabase
}