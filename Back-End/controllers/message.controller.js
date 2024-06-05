import { Conversation } from "../models/conversation.model.js";
import { Message } from "../models/message.model.js";

export const sendMessage = async(req,res)=>{
 try {
    
    const {message} = req.body;
    const {id:recieverId} = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
        participants:{
            $all:[senderId,recieverId]
        }
    })
   
    if(!conversation){
        conversation = await Conversation.create({
            participants:[senderId,recieverId],
        })
    }
    

    const newMessage = await Message.create({
        senderId,
        recieverId,
        message
    })
   
    if(newMessage){
        conversation.message.push(newMessage._id)
    }
    // await conversation.save();
    // await newMessage.save();
    //we can save it by using parallely
    await Promise.all([newMessage.save(),conversation.save()])
    return res.status(201).json(newMessage)
 } catch (error) {
    res.status(400,"internal server message error")
 }
};

export const getMessage = async(req,res)=>{
    try {
       
        const {id:userToChat} = req.params;
        const senderId = req.user._id
        const conversation = await Conversation.findOne({
            participants: {$all:[senderId,userToChat]},
        }).populate("message")
        if(!conversation) res.status(200).json([]);
        return res.status(200).json(conversation.message);
    } catch (error) {
        return res.status(500).json({error:"Internal server error"})
    }
}