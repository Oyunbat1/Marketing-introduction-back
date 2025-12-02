// MODEL орж ирнэ.
import Message from "../../../../model/Message.js"

export const createMessage = async (_: any, args: any, { }: any) => {
    const newMessage = new Message(args);
    const savedMessage = await newMessage.save();
    return savedMessage;
}