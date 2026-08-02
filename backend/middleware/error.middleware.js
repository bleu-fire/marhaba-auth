export const  error  =  (err,req,res,next)=>{
    //print error 
console.error(err.stack);
const statusCode = err.statusCode || 500
res.status(statusCode).json({scuess:false,message:err.message||"incorrect"})

}