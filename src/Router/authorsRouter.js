import express from 'express';
import { Authors } from '../schemas/collection-1.js';

const authorsRouter = express.Router();

authorsRouter.get('/:id', async (req, res) => {
    try {
        const authors = await Authors.findById(req.params.id);
        res.json(authors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

authorsRouter.post('/', async (req, res) => {
    try {
        console.log(req.body);

        const newAuthor = new Authors(req.body);
        const savedAuthor = await newAuthor.save();
        res.status(200).json(savedAuthor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

authorsRouter.put('/:id', async (req, res) => {
    try {
        const updatedAuthors = await Authors.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedAuthors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

authorsRouter.delete('/:id', async (req, res) => {
    try {
        await Authors.findByIdAndDelete(req.params.id);
        res.status(200).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default authorsRouter;
