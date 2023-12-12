import express from "express"
import authorsRouter from "./authorsRouter.js"
import postsRouter from "./postsRouter.js"
import multer from "multer"
/*import commentsRouter from "./commentsRouter.js"*/
///import path from "path"
import { CloudinaryStorage } from "multer-storage-cloudinary"   //dopo la registrazione sulla piattaforma ho istallato cloudinary (npm install cloudinary)
import { v2 as cloudinary } from "cloudinary"   //importo la versione 1

//CLOUDINARY_URL=cloudinary://499348822319913:xAAB7txk0rF5QVY7hCOsxyxIrys@dbonkeh7h


//cloudinary.config({
//cloud_name: 'dbonkeh7h',
//api_key: '499348822319913',
//api_secret: '***************************'
//});


const cloudinaryStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "EPICODE-folder-file",    //inserisco nome della cartella dove inserire file
    },
})

const upload = multer({ storage: cloudinaryStorage })      //ho installato npm install multer-storage-cloudinary

const apiRouter = express.Router()

apiRouter.use("/authors", authorsRouter)
/*apiRouter.use("/comments", commentsRouter)*/
apiRouter.use("/posts", postsRouter)

apiRouter.patch("/multipart", upload.single("avatar"), (req, res, next) => {
    console.log(req.file.path)
    res.send({ url: req.file.path })
})


export default apiRouter











//credenziali cloudinary
//// yivegoj751@mcenb.com
// Epic0de!
