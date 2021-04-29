import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (typeof token !== "undefined") {
    try {
      const { user } = await jwt.verify(token, process.env.SECRET_KEY);
      console.log("user:", user);
      req.user = user;
      next();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default verifyToken;
