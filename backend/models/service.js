import mongoose from "mongoose";

const ServiceSchema = mongoose.Schema({
 id: { type: String},
 img_url: { type: String},
 catagory: { type: String },
 title: { type: String },
 description: { type: String },
 price: {type: String },
 image: { type: Buffer },
})

export default mongoose.model('services', ServiceSchema);