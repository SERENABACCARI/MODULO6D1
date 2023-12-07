/*GET,POST,PUT,DELETE COMMENTI*/

import { comments } from '../schemas/collection-3.js'
import express from 'express';

const commentsRouter= express.Router();

commentsRouter.get('/:id', async (req, res) => {
    try {
        const comments = await comments.findById(req.params.id);
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



commentsRouter.get('/:id', async (req, res) => {
    try {
        // Utilizzo il metodo 'findOne' per trovare un commento specifico
        const comment = await comments.findOne({ _id: req.params.id });

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
 
        res.json(comment);
    } catch (error) {
       
        res.status(500).json({ error: error.message });
    }
});

commentsRouter.post('/', async (req, res) => {
    try {
        console.log(req.body);

        const newComment = new comments(req.body);
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

commentsRouter.put('/:id', async (req, res) => {
    try {
        const updatedComments = await Authors.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedComments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

commentsRouter.delete('/:id', async (req, res) => {
    try {
        await comments.findByIdAndDelete(req.params.id);
        res.status(200).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



export default commentsRouter;
