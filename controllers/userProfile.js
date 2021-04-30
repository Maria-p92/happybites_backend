import dbConnection from "../db/mysql.js";

export const getAllUserProfiles = async (req, res) => {
    try {
      await dbConnection.query(
        "SELECT * FROM User_profile JOIN Users ON User_profile.profileUser_id=Users.user_id",
        function (err, result) {
          if (err) throw err;
          res.json(result);
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  };

  export const getSingleUserProfile = async (req, res) => {
    try {
      await dbConnection.query(
        "SELECT * FROM User_profile JOIN Users ON User_profile.profileUser_id=Users.user_id WHERE User_profile.profileUser_id=" + req.params.id,
        function (err, result) {
          if (err) throw err;
          res.json(result);
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  };

  export const createUserProfile = async (req, res) => {
    const newUserProfile = [
       [req.body.username,
        req.body.favorites]
    ];
    console.log(req.body);
    try {
      await dbConnection.query(
        "INSERT INTO User_profile (username, favorites) VALUES ?",
        [newUserProfile],
        function (err, result) {
          if (err) throw err;
          res.json({ newUserProfile });
          console.log(`User profile was created`);
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  };
