import mysql from 'mysql';

const dbConnection = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASS, 
    database: process.env.DB_NAME,
    port: 3306
  });

  // make to connection to the database.
  dbConnection.connect(function(err) {
    if (err) throw err;
    // if connection is successful
   console.log('connection successful');
  });

export default dbConnection;