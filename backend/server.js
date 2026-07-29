import { tr } from "zod/v4/locales";
import sequelize from "./config/database.js"


async function StartServer (){
    try {
        await sequelize.authenticate()
        await sequelize.sync({alert:true})
    }
    catch{
        console.log("error on the database [x]");
        
    }
}