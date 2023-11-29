import { Schema, model } from "mongoose";

const schema = new Schema({
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


export const post = model("collection-2", schema);
