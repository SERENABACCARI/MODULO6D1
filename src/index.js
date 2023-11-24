import express from 'express';
import mongoose from 'mongoose';
import apiRouter from './apiRouter.js';

const server = express();
const port = 3000;
const username = encodeURIComponent("Serena88_");
const password = encodeURIComponent("12345678@");

// Importo il router API
server.use("/api", apiRouter);

// Connessione a MongoDB con Mongoose
mongoose.connect(`mongodb+srv://${username}:${password}@atlascluster.wmcuwgi.mongodb.net/EPICODE`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("🚀 Connected to MongoDB");

    // Avvio il server Express dopo la connessione al database
    server.listen(port, () => {
        console.log("🙂 Server listening on port: " + port);
    });
}).catch((error) => {
    console.error("❌ Error connecting to MongoDB:", error);
});
