import React, { useState } from "react";
import Search from "../Search";
import ChatRoom from "../Chat/Chat";
import useChat from "../../hooks/useChat";

const ChatContainer = () => {

    const { roomId } = 1; // Gets roomId from URL
    const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging   

    return(
        <>
        <ChatRoom roomId={1} messages={messages} sendMessage={sendMessage}/>
        <Search  sendMessage={sendMessage} />
        </>
    )
}

export default ChatContainer;