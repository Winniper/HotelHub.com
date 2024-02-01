import express, {Request , Response} from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from 'mongoose'
import userRoutes from "./Routes/users"
import { error } from "console"


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => {
    console.log("MongoDB connection established!")

    app.listen(port , () => {
    console.log(`The server is running on port: ${port}`)
    })    
}).catch((err) => {
    console.log("MongoDB connection failed")
    console.log(err)
}) 

app.get('/test',(req : Request, res: Response) => {
    res.send(`The server is running in port: ${port}`)
})

app.use("/users", userRoutes)