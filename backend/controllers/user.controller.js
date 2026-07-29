
import jwt  from "webjsontoken";
import bcrypt from "bcrypt"
import userModel from "../models/user.models";
import { sign } from "jsonwebtoken";
import { email } from "zod";


class UserCreation {
    async register (req,res) {
        try{
            const {email,password} = req.body;
            const ExitUser  = await userModel.findOne({where:{
                email
            }})
            if(ExitUser){
                return res.status(409).json({message:"error"})
            }
        

        

         const passwordhashed = bcrypt.hash(password,10)
         const savePassword = await userModel.create({
            email:email,
            password:passwordhashed
         });

         const jwtUser = jwt.sign(
            {id:ExitUser.id,
                email:ExitUser.email
            },
                "hello_games"
            ,{
                expiresIn:"15min"
            }
         );
         return res.status(201).json({message:"User registered successfully"})
        }
         catch{
             return res.status(502).json({message:"User is already"})
         }
        }

    async login (req,res){
        try{
        const {email,password} = req.body
        const User = await userModel.findOne({where:{
            email
        }})
        if(!userModel){
            return res.status(409).json({message:"the invalid password & email"})
            
        }
const IsPasswordUser =  bcrypt.compare(password,userModel.password) 

const creatJwt  = jwt.sgin({
    id:userModel.id,
    email:userModel.email
},
"hello_games"
,{
expiresIn:"15min"
})
if(!creatJwt){

}
return res.status(201).json({message:"the coockies",JWT:creatJwt})   
        }
catch{
return res.status(501).json({message:"error invalide "})
        }
        }
    async me (req,res){
        const user = await userModel.findByPk(req.body.id,{attributes:{
            exclude:["password"]
        }})
        if(!user){
            return res.status(404).json("User Not found")
        }
        return res.status(200).json(user)
        return res.status(501).json(user)
    }    

}

export default new UserCreation