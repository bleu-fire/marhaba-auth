import { Sequelize}  from "sequelize"
import dotenv,{config} from "dotenv"

config()

const sequelize  = new  Sequelize(process.env.NAME_DATABASE,process.env.USERNAME_DATABASE,process.env.PASSWORD_DATABASE,{
    host:process.env.HOST,
    dialect:'postgres'

})

export default sequelize