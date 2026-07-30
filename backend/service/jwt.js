
import jwt from "jsonwebtoken";
import dotenv, { config } from "dotenv"

config()
function JWT(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET_PASSWORD
    ,
    {
      expiresIn: "15m",
    }
  );
}

export default JWT;

