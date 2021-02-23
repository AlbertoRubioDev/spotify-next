import React, {useContext, useEffect} from "react";
import {AuthContext} from "../../context/context";
import { Textarea, Button, Box } from "@chakra-ui/react"


const ChatRoom = ({ messages, sendMessage }) => {
  const roomId  = 1; // Gets roomId from URL
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent
  const authContext = useContext(AuthContext);


  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  useEffect(() => {
    if(authContext.token && authContext.isLoggedIn ){
      console.log('LOGGED IN', authContext);
    }
  }, [authContext])
  
  

  return (
    <div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>
      <div className="messages-container">
        <ul className="messages-list">
          {messages.map((message, i) => (
            <Box
              boxShadow="md"
              maxW="sm" borderWidth="1px" borderRadius="lg"
              p={4}
              key={i}
              m={6}
              color={message.ownedByCurrentUser ? 'tomato' : 'teal'}
              ml={message.ownedByCurrentUser ? 'unset' : 'auto'}
            >
              {message.body}
            </Box>
          ))}
        </ul>
      </div>
      <Textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
      />
      <Button onClick={handleSendMessage}>
        Send
      </Button>
    </div>
  );
};

export default ChatRoom;