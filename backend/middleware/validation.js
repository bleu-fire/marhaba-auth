import z from "zod"

    export const RegisterSchema = z.object({
        fullname: z.string().min(1, "Full name is required"),
        email: z.string().email("the email not correct"),
        password: z.string().min(8,"the passowrd not correct")
    })

    export const ApplySchema = z.object({
        email: z.string().email("the email not correct"),
        password: z.string().min(8,"the passowrd not correct")
    })

    export const  ValidationSchema =  (schema) => async (req, res, next) => {

            const result = await schema.safeParse(req.body)
            if(!result.success){
                return res.status(400).json({ message: "error on the data", error: result.error});
            }
            req.body = result.data
            next()

            


    }
