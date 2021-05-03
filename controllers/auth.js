import dbConnection from "../db/mysql.js";
import jwt from "jsonwebtoken";
import _ from 'lodash'; 
import bcrypt from 'bcrypt';

// registration 
export const register = (req, res) =>  {
    let sql = "SELECT * FROM Users WHERE email='" + req.body.email+"'"; 
    console.log('sql: ', sql); 
    let query = dbConnection.query(sql, async (err, results) => {
        if(err) throw err; 
        if(results.length > 0)
        {
        return  res.send(JSON.stringify({"status": 302, "error": 'The user with this email already exists'}))
        }
        req.body.password = await bcrypt.hash(req.body.password, 10); 
        console.log('password:', req.body.password)
        const user= {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            company: req.body.company
        }    
            
        let sql = "INSERT INTO Users SET ? " ; 
        let query = dbConnection.query(sql, user,(err, results) => {
            if(err) throw err; 
            console.log(results)
            const token = jwt.sign({
                id: results.insertId,
                company: user.company
            }, 
            process.env.SECRET_KEY, {
                expiresIn: '1h', 
            });  
        res.status(201).json({token})    
     });
    });
}


//login 
export const signIn =  (req, res) =>  {
    let sql = "SELECT * FROM Users WHERE email='" + req.body.email+"'"; 
    console.log('sql: ', sql); 
    let query = dbConnection.query(sql, async (err, results) => {
        if(err) throw err; 
        if(results.length == 0)
        {
            res.send(JSON.stringify({"status": 404, "error": 'The user with that email does not exist', "token": null}))
        return; 
        }

        const valid = await bcrypt.compare(req.body.password, results[0].password); 
        if(!valid){
            res.send(JSON.stringify({"status": 404, "error": 'Incorrect password', "token": null}))
            return; 
        }
        //verify, secret | used for auth
        const token = jwt.sign({
            id: results[0].user_id,
            company: results[0].company
        }, 
        process.env.SECRET_KEY, {
            expiresIn: '1h', 
        }); 
        res.status(200).json( {token} )
    });
}


export const getUserInfo = async (req, res) => {
   /*  res.send(req.user); */
    res.json({success: true, ...req.user})
  };
