import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation";

import notifSound from '../assets/sounds/notifsound.wav';

const useRealTimeMessages = () =>{
    const {socket} = useSocketContext();
    const {messages , setMessages} = useConversation();

    useEffect(()=>{
         socket?.on("newMessage",(newMessage)=>{
            newMessage.shouldShake = true;
            const sound = new Audio(notifSound);
            sound.play();
            setMessages([...messages , newMessage]);
         })

         return () => socket?.off('newMessage');
    },[socket,setMessages, messages])
};

export default useRealTimeMessages;