import dbConnection from "../db/mysql.js";

export const getAllUsers = async (req, res) => {
    try {
      await dbConnection.query(
        "SELECT * FROM Users",
        function (err, result) {
          if (err) throw err;
          res.json(result);
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  };

  export const getSingleUser = async (req, res) => {
    try {
      await dbConnection.query(
        "SELECT * FROM Users WHERE Users.user_id=" + req.params.id,
        function (err, result) {
          if (err) throw err;
          res.json(result);
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  };

  /* export const createUser = async (req, res) => {
      const {username, password, email, first_name, last_name, company} = req.body
    const newUser = [
       [username,
        password,
        email,
        first_name,
        last_name,
        company]
    ];
    console.log(newUser);
    try {
      await dbConnection.query(
        "INSERT INTO Users (username, password, email, first_name, last_name, company) VALUES ?",
        [newUser],
        function (err, result) {
          if (err) throw err;
          res.json({ newUser });
          console.log(`User was created`);
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  };
 */