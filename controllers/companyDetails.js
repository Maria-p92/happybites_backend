import dbConnection from '../db/mysql.js'


export const getCompanyDetailsAll = async (req, res) => {
  try {
    await dbConnection.query('SELECT * FROM Company_details', function(err, result) {
      if (err) throw err;
     res.json(result)
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleCompany = async (req, res) => {
    try {
      await dbConnection.query('SELECT * FROM Company_details WHERE company_id=' + req.params.id, function(err, result) {
        if (err) throw err;
       res.json(result)
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  export const createSingleCompany = async (req, res) => {
    const newRestau = [[req.body.company_name,req.body.description, req.body.images, req.body.prices, req.body.capacity]]
    try {
      await dbConnection.query('INSERT INTO Company_details (company_name, description, images, prices, capacity) VALUES ?', [newRestau],  function(err, result) {
        if (err) throw err;
       res.json({newRestau})
       console.log(`restaurant was created`)
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

