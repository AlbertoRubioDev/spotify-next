import React, { useContext, useEffect, useCallback, useState } from "react";
import { AuthContext } from "../context/context";
import { spotifyAuthRedirect } from "../constants/api";
import { Button } from "@chakra-ui/react"
import Router, {useRouter} from 'next/router';


export default function Authentication(){

  const authContext = useContext(AuthContext);  
  const [loggedIn, setLoggedIn] = useState(false);
  const urlToRedirect = spotifyAuthRedirect;

  const logoutHandler = () => {
      authContext.logout();
      authContext.isLoggedIn = false;
      authContext.token = null;
      localStorage.removeItem('user_token');
      setLoggedIn(false);
  };

   useEffect(() =>{
     let userToken = localStorage.getItem('user_token');
     if(userToken){
      authContext.isLoggedIn = true;
      authContext.token = userToken;
      setLoggedIn(true)
     }
   },[loggedIn]);
   
   return (
       <>
          {loggedIn ? 
          <Button colorScheme="teal" variant="outline" onClick={logoutHandler}>Spotify Logout</Button>
          :<a href={urlToRedirect}> <Button colorScheme="teal">Spotify login</Button></a>
        }
       </>
   )
}