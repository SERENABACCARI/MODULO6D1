import mongoose, {Schema} from "mongoose";

const usersSchema=new Schema({
    name: {
        type: String
    },
    cognome: {
        type: String
    },
   password: {
        type: String
    },
})

export const users = mongoose.model("user", usersSchema);
