import dbConnection from "../db/mysql.js";

export const getIdeasAll = async (req, res) => {
  try {
    await dbConnection.query("SELECT * FROM Ideas", function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleIdea = async (req, res) => {
  try {
    await dbConnection.query(
      "SELECT * FROM Ideas WHERE idea_id=" + req.params.id,
      function (err, result) {
        if (err) throw err;
        res.json(result);
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createSingleIdea = async (req, res) => {
  const idea_img = req.file.filename
  const { company } = req.user;
  if (company) {
    const {
      company_id,
      category,
      title,
      description,
      images,
      products,
      company,
      ratings,
    } = req.body;
    const newIdea = [
      [
        company_id,
        category,
        title,
        description,
        idea_img,
        products,
        company,
        ratings
      ],
    ];
    try {
      await dbConnection.query(
        "INSERT INTO Ideas (company_id, category, title, description, images, products, company, ratings) VALUES ?",
        [newIdea],
        function (err, result) {
          if (err) throw err;
          res.json({ ...req.body, images: idea_img });
        }
      );
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json({ error: "Only company can add an idea" });
  }
};
