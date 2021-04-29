import dbConnection from "../db/mysql.js";
import jwt from "jsonwebtoken";
import _ from 'lodash'; 
import bcrypt from 'bcrypt';

// registration 
export const register = async (req, res) =>  {
    let sql = "SELECT * FROM Users WHERE email='" + req.body.email+"'"; 
    console.log('sql: ', sql); 
    let query = dbConnection.query(sql, async (err, results) => {
        if(err) throw err; 
        if(results.length > 0)
        {
            res.send(JSON.stringify({"status": 302, "error": 'User is found with that email'}))
        return; 
        }
        req.body.password = await bcrypt.hash(req.body.password, 12); 
        console.log('password:', req.body.password)
        const user= {
            username: req.body.name,
            email: req.body.email,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            company: req.body.company
        }        
        let sql = "INSERT INTO Users SET ?"; 
        let query = dbConnection.query(sql, user,(err, results) => {
            if(err) throw err; 
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}))     
     });
    });
}


//login 
export const signIn = async (req, res) =>  {
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
            user: _.pick(results[0], ['user_id', 'email']),
        }, 
        process.env.SECRET_KEY, {
            expiresIn: '5m', 
        }); 
        res.send(JSON.stringify({"status": 200, "error": null, "token": token }))
    });
}


export const getUserInfo = async (req, res) => {
   await res.send('Hello there');
  };
