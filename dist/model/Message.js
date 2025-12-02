import mongoose, { Document, Schema } from "mongoose";
const MessageSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    social: { type: String, required: true },
    company: { type: String, required: true },
    service: { type: String, required: true },
    message: { type: String, required: true }
}, { timestamps: true });
export default mongoose.model("Message", MessageSchema);
//# sourceMappingURL=Message.js.map