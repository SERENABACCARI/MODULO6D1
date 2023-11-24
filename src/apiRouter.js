import express from 'express';
/*import {Authors} from './schemas/collection-1.js';*/

/*mongodb+srv://Serena88_:12345678@>@atlascluster.wmcuwgi.mongodb.net/*/

const apiRouter = express.Router();



apiRouter.get('/test', async (req, res) => {
    res.json({ message: "hello world" })
    /*const authors = await Authors.findById('655db30bd39914e59bc6aa4f')

    res.json(authors)*/
})

apiRouter.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send()
})


/*apiRouter.put('/:id',async (req, res) => {
    const UpdateAuthors= await Authors.findByIdUpdate(req.params.id,req.body, {new:true});
    res.json(UpdateAuthors)
})*/



export default apiRouter;