const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'mysqlcontainer',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'nodecrud',
    insecureAuth: true
});

conexion.connect((error) =>{
    if(error){
        console.error('CONEXION ERROR: ' + error);
        return 
    }
    console.log('CONEXION SUCESSFULLY')
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS user(id int AUTO_INCREMENT, username VARCHAR(50), email VARCHAR(50), PRIMARY KEY(id))';
    conexion.query(sqlQuery, (err) => {
       if (err) throw err;
       console.log('TABLE CREATED');
   });
})

module.exports = conexion;

