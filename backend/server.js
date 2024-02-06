// importing modules
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
//importing routes
import authRoutes from './Routes/auth.routes.js';
import messageRoutes  from './Routes/message.routes.js';
import usersRoutes from './Routes/user.routes.js';
import path from 'path';
//importing functions
import connectToMongoDb from './DB/connectToMongoDb.js';
import { server , app} from './socketio/socket.js';



const PORT = process.env.PORT || 5000;


const __dirname = path.resolve();

dotenv.config();




app.use(express.json()); // to parse req with json from the body request
app.use(cookieParser()); // 

// user Routes
app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',usersRoutes);

//middleware to serve static files

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*",(req,res)=>{
res.sendFile(path.join(__dirname, "/frontend","dist","index.html"))
})

//run express server
server.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Server running at port ${PORT}`);
})

