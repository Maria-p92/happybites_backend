import dbConnection from '../db/mysql.js'

export const getFavsAll = async (req, res) => {
  try {
    await dbConnection.query("SELECT * FROM Favorites JOIN User_profile ON Favorites.fav_id=User_profile.user_id", function(err, result) {
      if (err) throw err;
     res.json(result)
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleFav = async (req, res) => {
    try {
      await dbConnection.query("SELECT * FROM Favorites JOIN User_profile ON Favorites.fav_id=User_profile.user_id WHERE Favorites.fav_id=" + req.params.id, function(err, result) {
        if (err) throw err;
       res.json(result)
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  export const createSingleFav = async (req, res) => {
    const { } = req.body
    const newIdea = [[category, title, description, images, products, company, likes]]
    console.log(req.body)
    try {
      await dbConnection.query('INSERT INTO Ideas (category, title, description, images, products, company, likes) VALUES ?', [newIdea],  function(err, result) {
        if (err) throw err;
       res.json({newIdea})
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

