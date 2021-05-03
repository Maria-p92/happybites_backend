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
    const {id, company} = req.user
    const newUserProfile = [
       [req.body.username,
        req.body.favorites]
    ];
    try {
      if(company){
        const newCompany = [
          [id,
            req.body.company_name,
            req.body.description,
            req.body.lat,
            req.body.lon,
            req.body.images,
           req.body.prices]
       ];
        await dbConnection.query(
          "INSERT INTO Company_profile (user_id, company_name, description, lat, lon, images, prices) VALUES ?",
          [newCompany],
          function (err, result) {
            if (err) throw err;
            res.json({ newUserProfile });
            console.log(`User profile was created`);
          }
        );

      } else{
        const newUserProfile = [
          [id,
            req.body.username,
            req.body.profile_pic
          ]
        ]
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


/*   Users
1 Test false
2 Test2 true

  User_profile
1 1 ...data
  Company_profile 
1 2 ...data
2 2 ...data
2 2 ...data
2 2 ...data
 */