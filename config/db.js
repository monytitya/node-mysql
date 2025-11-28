const mysql = require('mysql2/promise');
const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mony2024**2000',
    database: 'studensts_db'

});

module.exports = mySqlPool;

 
