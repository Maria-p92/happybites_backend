import dbConnection from "../db/mysql.js";

export const getAllUsers = async (req, res) => {
    try {
      await dbConnection.query(
        "SELECT * FROM Users JOIN User_profile ON Users.user_id=User_profile.profileUser_id",
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
        "SELECT * FROM Users JOIN User_profile ON Users.user_id=User_profile.profileUser_id WHERE Users.user_id=" + req.params.id,
        function (err, result) {
          if (err) throw err;
          res.json(result);
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  };

  export const createUser = async (req, res) => {
    const newUser = [
      [
        req.body.username,
        req.body.password,
        req.body.email,
        req.body.first_name,
        req.body.last_name,
        req.body.company
      ],
    ];
    try {
      await dbConnection.query(
        "INSERT INTO Users (username, password, email, first_name, last_name, company) VALUES ?",
        [newCompany],
        function (err, result) {
          if (err) throw err;
          res.json({ newCompany });
          console.log(`User was created`);
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  };
