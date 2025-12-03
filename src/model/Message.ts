import mongoose, { Document, Schema } from "mongoose";

export interface IMessage extends Document {
    name: string;
    email: string;
    phoneNumber?: string;  // Changed from optional based on common practice. Use string! if mandatory.
    companyName: string;   // Updated from 'social'
    role: string;          // Updated from 'company'
    service: string;
    message: string
}

const MessageSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: false }, // Updated field, set to 'false' if optional
    companyName: { type: String, required: true }, // Updated from 'social'
    role: { type: String, required: true },        // Updated from 'company'
    service: { type: String, required: true },
    message: { type: String, required: true }
}, { timestamps: true })

export default mongoose.model<IMessage>("Message", MessageSchema);