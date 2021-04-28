import dbConnection from "../db/mysql.js";

export const signIn = async (req, res) => {
  const {email, password} = req.body

  dbConnection.query(
    "SELECT * FROM Users WHERE email = ?",
    [email],
    function (error, results, fields) {
      if (error) {
        res.json({
          status: false,
          message: "There are some error with query",
        });
      } else {
        if (results.length > 0) {
          if (password == results[0].password) {
            res.json({
              status: true,
              message: "Successfully authenticated",
            });
          } else {
            res.json({
              status: false,
              message: "Email and password does not match",
            });
          }
        } else {
          res.json({
            status: false,
            message: "Email does not exits",
          });
        }
      }
    }
  );
};
