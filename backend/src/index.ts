import express, {Request , Response} from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from 'mongoose'


const app = express()
const port = process.env.PORT || 3000


try {
    mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string) 
    console.log("MongoDB is connected")
    app.listen(port , () => {
        console.log(`The server is running on port: ${port}`)    
    })
} catch (error) {
    console.log(error)
}

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())

app.get("/api/test",(req: Request , res : Response)=>{
    res.json({message : "Hello"})
})

