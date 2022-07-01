const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'node-crud'
});

conexion.connect((error) =>{
    if(error){
        console.error('CONEXION ERROR: ' + error);
        return 
    }
    console.log('CONEXION SUCESSFULLY')
})

module.exports = conexion;

