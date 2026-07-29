
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export default  sequelize.define("user",{
id:{
    type:DataTypes.INTEGER,
    autoIncrement:true
},
fullname:{
    type:DataTypes.STRING,
    allowNull:false
},
email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
},
password:{
    type:DataTypes.STRING,
    allowNull:true,
}
})