import React, { useState } from "react";
import {AuthContext} from "../../context/context";
import Authentication from "../Authentication";
import { Container, Stack } from "@chakra-ui/react";
import ChatContainer from "../ChatContainer";


const Sheet = ({roomId}) => {

  const [loggedIn, setLoggedIn] = useState(false); 
  
  const login = () => {
    setLoggedIn(true);
  }    

  const logout = () => {
    setLoggedIn(false);
  }
  return (
    <AuthContext.Provider value={{isLoggedIn: loggedIn , login:login, logout:logout}}>
      <Container maxW="3xl">
        <Stack spacing={4}>
          <Authentication />
          <ChatContainer roomId={roomId} />
        </Stack>
      </Container>
    </AuthContext.Provider>

  );
};

export default Sheet;
