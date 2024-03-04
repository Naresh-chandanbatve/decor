import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
 id: { type: String},
 userID: { type: String },
 serviceID: { type: String },
 address: { type: String },
 time_slot: {
    type: Object,
    required: true,
    properties: {
      startTime: { type: Date },
      endTime: { type: Date },
    },
  },
 date: { type: Date },
 status: { type: String },
})

export default mongoose.model('carts', cartSchema);