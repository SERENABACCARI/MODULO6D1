/*SCHEMA COMMENTI*/

import { Schema, model } from "mongoose";

const CommentsSchema = new Schema({
    name: {
        type: String
    },
    cognome: {
        type: String
    },
    comment: {
        type: String
    },
   
});


export const comments = mongoose.model("collection-3", CommentsSchema);
