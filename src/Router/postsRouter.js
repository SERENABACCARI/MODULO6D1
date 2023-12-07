//  blog posts
import { Post } from '../schemas/collection-2.js';
import express from 'express';

const postsRouter = express.Router();

// GET endpoint 
postsRouter.get("/", async (req, res, next) => {
    try {
        const posts = await Post.find({});
        res.json(posts);
    } catch (error) {
        next(error);
    }
});

// POST endpoint 
postsRouter.post("/", async (req, res, next) => {
    try {
        
        const newPost = await Post.create(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        next(error);
    }
});

// PUT endpoint 
postsRouter.put("/:id", async (req, res, next) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json(updatedPost);
    } catch (error) {
        next(error);
    }
});

// DELETE endpoint 
postsRouter.delete("/:id", async (req, res, next) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json({ message: 'Post deleted successfully' });
    } catch (error) {
        next(error);
    }
});

export default postsRouter;
