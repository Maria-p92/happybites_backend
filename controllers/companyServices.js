import dbConnection from '../db/mysql.js'

export const getServicesAll = async (req, res) => {
  try {
    await dbConnection.query
    ("SELECT * FROM Company_services", 
    function(err, result) {
      if (err) throw err;
     res.json(result)
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleService = async (req, res) => {
    try {
      await dbConnection.query("SELECT * FROM Company_services JOIN Company_requests ON Company_requests.user_id=Company_services.service_id WHERE user_id=" + req.params.id, function(err, result) {
        if (err) throw err;
       res.json(result)
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  export const createSingleService = async (req, res) => {
    const {id} = req.user
    const {service_name, description, address, likes, lat, lon, prices, images} = req.body
    const newService = [[id, service_name, description, address, likes, lat, lon, prices, images]]
    console.log(req.body)
    try {
      await dbConnection.query('INSERT INTO Company_services (service_id, service_name, description, address, likes, lat, lon, prices, images) VALUES ?', [newService],  function(err, result) {
        if (err) throw err;
       res.json({newService})
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };
