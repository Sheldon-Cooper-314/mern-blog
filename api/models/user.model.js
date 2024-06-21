import { strict } from "assert";
import mongoose, { STATES, mongo } from "mongoose";
import { stringify } from "querystring";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true,
    },
    email:{
        type: String,
        required: true,
    }, 
}, {timestamps:true}
);

const User= mongoose.model('User',userSchema);

export default User;