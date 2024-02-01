import express,{Request, Response} from "express"
import { check, validationResult } from "express-validator"
import User from "../Models/user"

const router = express.Router()

router.post("/login",[check("email","email is required").isEmail(),
check("password","passowrd should be atleast 6 character long").isLength({min:6})], 
async (req : Request, res : Response) =>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({message:errors.array()})
    }
    const {email , password} = req.body

    const user = await User.findOne(email)

})