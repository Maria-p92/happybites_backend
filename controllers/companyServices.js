import dbConnection from "../db/mysql.js";

export const getServicesAll = async (req, res) => {
  try {
    await dbConnection.query(
      "SELECT * FROM Company_services",
      function (err, result) {
        if (err) throw err;
        res.json(result);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleService = async (req, res) => {
  try {
    await dbConnection.query(
      "SELECT * FROM Company_services WHERE service_id=" +
        req.params.id,
      function (err, result) {
        if (err) throw err;
        res.json(result);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createSingleService = async (req, res) => {
  const { company } = req.user;
  if (company) {
    const {
      company_id,
      service_name,
      description,
      address,
      rating,
      lat,
      lon,
      prices,
      images,
      phone, 
      capacity,
      assortment
    } = req.body;
    const newService = [
      [
        company_id,
        service_name,
        description,
        address,
        rating,
        lat,
        lon,
        prices,
        images,
        phone, 
        capacity,
        assortment
      ],
    ];
    console.log(req.body);
    try {
      await dbConnection.query(
        "INSERT INTO Company_services (company_id, service_name, description, address, rating, lat, lon, prices, images, phone, capacity, assortment) VALUES ?",
        [newService],
        function (err, result) {
          if (err) throw err;
          res.json({ newService });
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json({ error: "User should be a company" });
  }
};
