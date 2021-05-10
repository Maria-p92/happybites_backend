import jwt from "jsonwebtoken";
import { version } from "mongoose";

const verifyToken = async (req, res, next) => {
  console.log(req.body)
  const {token} = req.headers
  if (!token) return res.sendStatus(403);
  try {
    const { id, company } = await jwt.verify(token, process.env.SECRET_KEY);
    console.log("user:", id);
    // Select user from database 
   // const user = a
    // req.user = user;
    req.user = {id, company}
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default verifyToken;