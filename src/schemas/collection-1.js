/*SCHEMA AUTORE*/
import mongoose, { Schema } from "mongoose"


const AuthorSchema = new Schema({
    name: {
        type: String
    },
    cognome: {
        type: String
    },
    email: {
        type: String
    },
    data: {
        type: Date
    },
    avatar: {
        type: String
    },
});


export const Authors = mongoose.model("collection-1", AuthorSchema);
