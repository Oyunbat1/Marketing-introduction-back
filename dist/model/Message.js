import mongoose, { Schema } from "mongoose";
const MessageSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: false }, // Updated field, set to 'false' if optional
    companyName: { type: String, required: true }, // Updated from 'social'
    role: { type: String, required: true }, // Updated from 'company'
    service: { type: String, required: true },
    message: { type: String, required: true }
}, { timestamps: true });
export default mongoose.model("Message", MessageSchema);
