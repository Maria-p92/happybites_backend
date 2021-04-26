import mysql from 'mysql';

const dbConnection = mysql.createConnection({
    host: "mariaparra.c3ecw157bcpe.eu-central-1.rds.amazonaws.com", 
    user: "admin", 
    password: "Guapaza15", 
    database: "happy_bites",
    port: 3306
  });

  // make to connection to the database.
  dbConnection.connect(function(err) {
    if (err) throw err;
    // if connection is successful
   console.log('connection successful');
  });

export default dbConnection;