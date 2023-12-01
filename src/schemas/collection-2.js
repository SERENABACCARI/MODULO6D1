/*SCHEMA BLOGPOST*/


import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    category: {
        type: String,
        required:true,
    },
    title: {
        type: String,
        reqired:true,
    },
   cover: {
        type: String,
        required:true,
    },
    readTime: {
        value: Number,
        unit: String,
    },
    avatar: {
        type: String
    },
});


export const Post = mongoose.model("collection-2", PostSchema);
