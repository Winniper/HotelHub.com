import express, {Request, Response} from "express";
import User from "../Models/user";
import jwt from "jsonwebtoken"
import {check, validationResult} from "express-validator"

const router = express.Router()

router.post("/register",[check("firstname","firstname is required").isString(),
check("lastname","lastname i,s required",).isString(),
check("email","email is required").isEmail(),
check("password","password should be atleast 6 character long").isLength({min :6})], 
async (req: Request, res: Response) => {
    const error = validationResult(req)
    if (!error.isEmpty()){
        return res.status(400).json({message : error.array()})
    }
    try {
        let user = await User.findOne({
            email: req.body.email,
        })

        if (user) {
           return res.status(400).json({message : "This email is already beign used"})
        }

        user = new User(req.body)
        await user.save()

        const token = jwt.sign({userId : user.id}, process.env.JWT_SECRET_KEY as string, {expiresIn:"1d",})
        
        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000,
        })
        return res.status(200).send({message: "Succesfull"})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message : "Something went wrong"})
    }
})

export default router