import dbConnection from "../db/mysql.js";

export const getAllCompanies = async (req, res) => {
  try {
    await dbConnection.query(
      "SELECT * FROM Company_profile JOIN Users ON Company_profile.service_id=Users.user_id",
      function (err, result) {
        if (err) throw err;
        res.json(result);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleCompany = async (req, res) => {
  try {
    await dbConnection.query(
      "SELECT * FROM Company_profile JOIN Users ON Company_profile.service_id=Users.user_id WHERE service_id=" + req.params.id,
      function (err, result) {
        if (err) throw err;
        res.json(result);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createCompanyProfile = async (req, res) => {
  const newCompany = 
   [[
      req.body.company_id,
      req.body.description,
      req.body.images,
      req.body.prices,
      req.body.capacity,
      req.body.event_requested,
      req.body.lat,
      req.body.lon
    ]];
  try {
    await dbConnection.query(
      "INSERT INTO Company_profile (company_id, description, images, capacity, prices, event_requested, lat, lon) VALUES ?",
      [newCompany],
      function (err, result) {
        if (err) throw err;
        res.json({ newCompany });
        console.log(`Company was created`);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};
