import dbConnection from '../db/mysql.js'

export const getFavsAll = async (req, res) => {
  try {
    await dbConnection.query("SELECT * FROM Favorites JOIN User_profile ON Favorites.fav_id=User_profile.user_id JOIN Ideas ON Favorites.fav_id=Ideas.idea_id JOIN Users ON Favorites.fav_id=Users.user_id", function(err, result) {
      if (err) throw err;
     res.json(result)
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleFav = async (req, res) => {

    try {
      await dbConnection.query("SELECT * FROM Favorites JOIN User_profile ON Favorites.fav_id=User_profile.user_id JOIN Ideas ON Favorites.fav_id=Ideas.idea_id JOIN Users ON Favorites.fav_id=Users.user_id WHERE Favorites.fav_id=" + req.params.id, function(err, result) {
        if (err) throw err;
       res.json(result)
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  export const addToFav = async (req, res) => {
    const newFav = [[]]
    try {
      await dbConnection.query('INSERT INTO Favorites () VALUES ?', [newFav],  function(err, result) {
        if (err) throw err;
       res.json({newFav})
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };