import express from "express";
import route from "./routes/loginAuth.routes.js";
import sequelize from "./config/database.js";
import dotenv from "dotenv";
import logger from "./middleware/logger.middleware.js"
import { error } from "./middleware/error.middleware.js";
import cors from "cors"
dotenv.config();



const Port = 3000;
const app = express();
app.use(logger)
app.use(cors())
app.use(express.json())
app.use(route);
app.use(error)

async function ServerManaging() {
  try {
    await sequelize.authenticate();
    console.log("authentication start");

    await sequelize.sync({alter:true});
    console.log("done");

    await app.listen(Port, '0.0.0.0',() => {
      console.log("Server running");
    });
  } catch (error) {
    console.error(error);
  }
};
ServerManaging();
