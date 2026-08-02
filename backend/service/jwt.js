
import jwt from "jsonwebtoken";
import dotenv, { config } from "dotenv"

config()

export function generateAccessToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET_PASSWORD,
    {
      expiresIn: "15m",
    }
  );
}

export function generateRefreshToken(user) {
  return jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET_PASSWORD,
    {
      expiresIn: "7d",
    }
  );
}

