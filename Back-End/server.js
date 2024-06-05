import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routers/auth.router.js'
import messageRoutes from './routers/message.router.js'
import userRoutes from './routers/user.router.js'
import connectToMongoDB from './DB/connectDatabse.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const PORT = process.env.PORT||5000
const app = express()
app.use(express.json()) //to take the incoming request witn json payload
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes)

app.listen(PORT,()=>{
    connectToMongoDB()
    console.log("server listening at port",PORT);
});