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
  const {id, company} = req.user
  console.log(company)
  try {
    if(company){
      await dbConnection.query(
        "SELECT Company_profile.company_name, Company_profile.address, Company_profile.profile_pic  FROM Company_profile JOIN Users ON Company_profile.user_id=Users.user_id WHERE Users.user_id=" +
          req.user.id,
        function (err, result) {
          if (err) throw err;
          res.json({company: true, result});
        }
      );
    } else{
      await dbConnection.query(
        "SELECT User_profile.profileUser_id, User_profile.username, User_profile.profile_pic  FROM User_profile JOIN Users ON User_profile.user_id=Users.user_id WHERE Users.user_id=" +
          req.user.id,
        function (err, result) {
          if (err) throw err;
          res.json({company: false, result});
        }
      );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createUserProfile = async (req, res) => {
  const {id, company} = req.user
  const {username, company_name, address, profile_pic} = req.body
  const newUserProfile = [
    [req.body.username,
     req.body.favorites
    ]
 ];
  try {
    if (company) {
      const newCompany = [
        [id, company_name, address, profile_pic]
      ];
      await dbConnection.query(
        "INSERT INTO Company_profile (user_id, company_name, address, profile_pic) VALUES ?",
        [newCompany],
        function (err, result) {
          if (err) throw err;
          res.json({ newUserProfile });
          console.log(`Company profile was created`);
        }
      );
    } else {
      const newUserProfile = [[id, username, profile_pic ]];
      await dbConnection.query(
        "INSERT INTO User_profile (user_id, username, profile_pic) VALUES ?",
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