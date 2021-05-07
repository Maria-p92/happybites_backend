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
      "SELECT * FROM User_profile JOIN Users ON User_profile.profileUser_id=Users.user_id WHERE User_profile.profileUser_id=" +
        req.params.id,
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
  const {id, company} = req.user
  const {username, company_name, address, profile_pic, category, phone} = req.body
  const newUserProfile = [
    [req.body.username,
     req.body.favorites
    ]
 ];
  try {
    if (company) {
      const newCompany = [
        [id, company_name, address, category, profile_pic]
      ];
      await dbConnection.query(
        "INSERT INTO Company_profile (user_id, company_name, address, category, profile_pic) VALUES ?",
        [newCompany],
        function (err, result) {
          if (err) throw err;
          res.json({ newCompany });
          console.log(`Company profile was created`);
        }
      );
    } else {
      const newUserProfile = [[id, username, profile_pic, phone ]];
      await dbConnection.query(
        "INSERT INTO User_profile (user_id, username, profile_pic, phone) VALUES ?",
        [newUserProfile],
        function (err, result) {
          if (err) throw err;
          res.json({ newUserProfile });
          console.log(`User profile was created`);
        }
      );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};