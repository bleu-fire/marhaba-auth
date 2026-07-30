import bcrypt from "bcrypt";
import User from "../models/user.models.js";
import JWT from "../service/jwt.js";

class UserCreation {

async register(req, res, next) {
  try {
    const { email, password, fullname } = req.body;

    const existingUser = await User.findOne({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullname,
      email,
      password: passwordHashed,
    });
    console.log("USER BEFORE JWT:", user);

    const token = await JWT(user);

    return res.status(201).json({
      message: "User registered successfully",
      user,
      token,
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
}


  
async login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }



    const token = await JWT(user);

    return res.status(200).json({
      message: "Login successful",
      token,
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
}

async me(req, res, next) {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: {
        exclude: ["password"],
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json(user);

  } catch (error) {
    console.error("ME ERROR:", error);

    return res.status(500).json({
      message: error.message,
    });
  }
}

}

export default new UserCreation();
