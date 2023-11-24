import express from 'express';
import apiRouter from './apiRouter.js';
/*import mongoose from "mongoose";*/

const server = express();

const port = 3000;

server.use("/api", apiRouter)

/*mongoose.connect("mongodb+srv://Serena88_:12345678@>@atlascluster.wmcuwgi.mongodb.net/EPICODE")*/

server.listen(port, () => {
    console.log(":) Server listening to port:" + port);

})
/*.catch (()=>{
    console.log(":) Error listening to port:" + port);
})*/
