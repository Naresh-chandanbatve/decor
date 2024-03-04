import mongoose from "mongoose";

const userSchema = mongoose.Schema({
 id: { type: String},
 name: { type: String },
 username: { type: String },
 email: { type: String },
 password: {type: String },
 phone: { type: Number },
 address: { type: String },
 isAdmin: { type: Boolean, default: false },
 googleID: { type: String},
 img_url: { type: String },
 isVerified: { type: Boolean, default: false},
})

export default mongoose.model('users', userSchema);