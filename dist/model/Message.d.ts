import mongoose, { Document } from "mongoose";
export interface IMessage extends Document {
    name: string;
    email: string;
    social: string;
    company: string;
    service: string;
    message: string;
}
declare const _default: mongoose.Model<IMessage, {}, {}, {}, mongoose.Document<unknown, {}, IMessage, {}, {}> & IMessage & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Message.d.ts.map