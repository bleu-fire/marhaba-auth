import z from "zod"



    export const ApplySchema = z.object({
        fullname: z.string().min(3,"the name  not correct"),
        email: z.string().email("the email not correct"),
        password: z.string().min(8,"the passowrd not correct")
    })

    export const  ValidationSchema =  (schema) => async (req, res, next) => {

            const result = await schema.safeParse(req.body)
            if(!result){
                return res.status(400).json({ message: "error on the data", error: error});
            }
            req.body = result.data
            next()

            


    }



