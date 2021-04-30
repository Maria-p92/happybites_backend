import dbConnection from '../db/mysql.js'

export const getIdeasAll = async (req, res) => {
  try {
    await dbConnection.query('SELECT * FROM Ideas', function(err, result) {
      if (err) throw err;
     res.json(result)
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleIdea = async (req, res) => {
    try {
      await dbConnection.query('SELECT * FROM Ideas WHERE idea_id=' + req.params.id, function(err, result) {
        if (err) throw err;
       res.json(result)
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  export const createSingleIdea = async (req, res) => {
    const {category, title, description, images, products, company, likes } = req.body
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

