import React, { useState } from "react";
import Search from "../Search";
import ChatRoom from "../Chat/Chat";
import useChat from "../../hooks/useChat";

const ChatContainer = ({ roomId } ) => {

    const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging   

    return(
        <>
        <ChatRoom roomId={roomId} messages={messages} sendMessage={sendMessage}/>
        <Search  sendMessage={sendMessage} />
        </>
    )
}

export default ChatContainer;