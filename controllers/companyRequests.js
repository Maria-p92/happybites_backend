import dbConnection from "../db/mysql.js";

export const getRequestsAll = async (req, res) => {
  try {
    await dbConnection.query(
      "SELECT Company_requests.email, Company_requests.phone, Company_requests.guest_number, Company_requests.event_date, Company_requests.message, Company_requests.price, Company_requests.user_id, Company_requests.service_id, Company_requests.company_id FROM Company_requests JOIN User_profile ON Company_requests.profileUser_id=User_profile.profileUser_id",
      function (err, result) {
        if (err) throw err;
        res.json(result);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleRequestPerUser = async (req, res) => {
  try {
    console.log(req.params.id)
    await dbConnection.query(
      "SELECT * FROM Company_requests JOIN User_profile ON Company_requests.profileUser_id=User_profile.profileUser_id WHERE User_profile.profileUser_id=" +
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

export const createSingleRequest = async (req, res) => {
  const { company } = req.user;
  if (!company) {
    const {
      profileUser_id,
      company_id,
      service_id,
      email,
      phone,
      guest_number,
      event_date,
      message,
      price,
    } = req.body;
    const newEvent = [
      [
        profileUser_id,
        company_id,
        service_id,
        email,
        phone,
        guest_number,
        event_date,
        message,
        price,
      ],
    ];
    try {
      await dbConnection.query(
        "INSERT INTO Company_requests (profileUser_id, company_id, service_id, email, phone, guest_number, event_date, message, price) VALUES ?",
        [newEvent],
        function (err, result) {
          if (err) throw err;
          res.json({ newEvent });
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json({ error: "User should not be a company" });
  }
};
