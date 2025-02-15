import mongoose, { Schema } from "mongoose";

export interface IUser {
    email : string,
    password : string
}

const UserSchema = new Schema<IUser>({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        unique : true
    }
})


export default mongoose.model('User', UserSchema)