import Conversation from '../Models/conversation.model.js';
import Message from '../Models/messages.model.js';
import { getReceiverSocketId, io } from '../socketio/socket.js';

export const sendMessage = async (req, res) => {
try {
    const {message} = req.body;
    const {id:receiverId} = req.params;
    const senderId = req.user._id    
let  conversation =   await Conversation.findOne({
    participants:{ $all :[senderId,receiverId]} ,
    })

    if(!conversation){
      conversation = await Conversation.create({
        participants : [senderId,receiverId],
      })
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        message,
    })

    if(newMessage){
        conversation.messages.push(newMessage._id);
    }
   await Promise.all([conversation.save(),newMessage.save()])

   //socker io real time messages
   const receiverSocketId = getReceiverSocketId(receiverId);
   if(receiverSocketId){
    //this method is called to send real time message to specific client
    io.to( receiverSocketId).emit("newMessage",newMessage);
   }
    res.status(201).json(newMessage);
} catch (error) {
    console.log("Error while sending message", error.message);
    res.status(500).json({error:"Internal Server Error"})
}

}

export const getMessages = async (req, res) => { 
    try {
        const {id:userToChatId} = req.params ; 
        const senderId = req.user._id;
        
        const conversation = await Conversation.findOne({
            participants : { $all : [senderId , userToChatId ] },
        }).populate("messages"); // getting the actual messages

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages ; 
        res.status(200).json(messages);
        
    } catch (error) {
        console.log("Error while getting message", error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}
