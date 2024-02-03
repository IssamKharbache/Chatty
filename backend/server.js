// importing modules
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
//importing routes
import authRoutes from './Routes/auth.routes.js';
import messageRoutes  from './Routes/message.routes.js';
import usersRoutes from './Routes/user.routes.js';
//importing functions
import connectToMongoDb from './DB/connectToMongoDb.js';


const app = express();
const PORT = process.env.PORT || 5000

dotenv.config();




app.use(express.json()); // to parse req with json from the body request
app.use(cookieParser()); // 

// user Routes
app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',usersRoutes);


//run express server
app.listen(5000,()=>{
    connectToMongoDb();
    console.log(`Server running at port ${PORT}`);
})



/*app.get('/', (req, res) => {
    //root 
    res.send("Hello world")
})*/
