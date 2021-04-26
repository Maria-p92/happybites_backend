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
      await dbConnection.query('SELECT * FROM Company_details WHERE company_id=$1',  function(err, result) {
        if (err) throw err;
       res.json(result)
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

