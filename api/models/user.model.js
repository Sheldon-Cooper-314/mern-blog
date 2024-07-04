
import mongoose, { STATES, mongo } from "mongoose";



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
    password: {
        type: String,
        required: true,
      },
      profilePicture: {
        type: String,
        defualt: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLM5cw_X6MIlgT5nPHiuijlDBSO5SpN8P3w&s",
      },
      isAdmin:{
        type: Boolean,
        default: false,
      },
}, {timestamps:true}
);

const User= mongoose.model('User',userSchema);

export default User;