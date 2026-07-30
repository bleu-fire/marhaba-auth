
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user",{
id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
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
}},
{
    timestamps:true,
    tableName:"user"

}
)

export default  User