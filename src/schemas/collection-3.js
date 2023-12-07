/*SCHEMA COMMENTI*/
import mongoose, { Schema } from "mongoose";

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

// Capitalize the model name
export const Comments = mongoose.model("collection-3", CommentsSchema);
