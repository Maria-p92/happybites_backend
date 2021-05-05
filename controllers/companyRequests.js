import dbConnection from '../db/mysql.js'

export const getRequestsAll = async (req, res) => {
  try {
    await dbConnection.query
    ("SELECT * FROM Company_requests", 
    function(err, result) {
      if (err) throw err;
     res.json(result)
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleRequest = async (req, res) => {
    try {
      await dbConnection.query("SELECT * FROM Company_requests JOIN Users ON Company_requests.event_id=Users.user_id WHERE event_id=" + req.params.id, function(err, result) {
        if (err) throw err;
       res.json(result)
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  export const createSingleRequest = async (req, res) => {
    const {id} = req.user
    const {email, phone, guest_number, event_date,message,price} = req.body
    const newEvent = [[id, email, phone, guest_number, event_date, message, price]]
    console.log(req.body)
    try {
      await dbConnection.query('INSERT INTO Company_requests (user_id, email, phone, guest_number, event_date, message, price) VALUES ?', [newEvent],  function(err, result) {
        if (err) throw err;
       res.json({newEvent})
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

