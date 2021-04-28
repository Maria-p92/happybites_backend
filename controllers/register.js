import dbConnection from '../db/mysql.js'

export const register = async (req,res) => {
    const users={
        "username":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
        "first_name": req.body.first_name,
        "last_name":req.body.last_name,
        "company": req.body.company
    }
    dbConnection.query('INSERT INTO Users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'There are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'User registered sucessfully'
        })
      }
    });
}