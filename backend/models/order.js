import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
 id: { type: String},
 userID: { type: String },
 status: { type: String, default: 'PENDING' },
 serviceID: { type: String },
 address: { type: String },
 time_slot: {
     type: Object,
     properties: {
       startTime: { type: Date },
       endTime: { type: Date },
     },
   },
 date: { type: Date },
})

export default mongoose.model('orders', orderSchema);