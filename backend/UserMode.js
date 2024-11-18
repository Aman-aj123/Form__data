import mongoose from "mongoose"
import { Schema } from "mongoose"

// Creating a schema for user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        required: true,
        type: String
    },
    number: {
        required: true,
        type: Number
    }
},
{
    timestamps: true
}
);


const UserModel = mongoose.model("User", userSchema);
 
export default UserModel