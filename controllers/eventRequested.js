import dbConnection from '../db/mysql.js'


export const getEventsAll = async (req, res) => {
  try {
    await dbConnection.query('SELECT * FROM Event_requested', function(err, result) {
      if (err) throw err;
     res.json(result)
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleEvent = async (req, res) => {
    try {
      await dbConnection.query('SELECT * FROM Event_requested WHERE event_id=' + req.params.id, function(err, result) {
        if (err) throw err;
       res.json(result)
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  export const createSingleEvent = async (req, res) => {
    const newEvent = [[req.body.email, req.body.phone, req.body.guest_number, req.body.event_date, req.body.message, req.body.price]]
    console.log(req.body)
    try {
      await dbConnection.query('INSERT INTO Event_requested (email, phone, guest_number, event_date, message, price) VALUES ?', [newEvent],  function(err, result) {
        if (err) throw err;
       res.json({newEvent})
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };
