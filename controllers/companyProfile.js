import dbConnection from "../db/mysql.js";

export const getAllCompanies = async (req, res) => {
  try {
    await dbConnection.query(
      "SELECT * FROM Company_profile JOIN Users ON Company_profile.company_id=Users.user_id",
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
      "SELECT * FROM Company_profile JOIN Users ON Company_profile.company_id=Users.user_id WHERE company_id=" +
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

export const createCompanyProfile = async (req, res) => {
  const newCompanyProfile = [
    [
      req.body.company_id,
      req.body.address,
      req.body.profile_pic, 
      req.body.company_name
    ]];
  try {
    await dbConnection.query(
      "INSERT INTO Company_profile (company_id, address, profile_pic, company_name) VALUES ?",
      [newCompanyProfile],
      function (err, result) {
        if (err) throw err;
        res.json({ newCompanyProfile });
        console.log(`Company was created`);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

export const removeCompany = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await dbConnection.query(
      `DELETE FROM Company_profile WHERE company_id` + id,
      function (err, result) {
        if (err) throw err;
        res.json(result);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateCompany = async (req, res) => {};
