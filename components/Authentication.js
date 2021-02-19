import React, { useContext, useEffect, useCallback, useState } from "react";
import { AuthContext } from "../context/context";
import { spotifyAuthRedirect } from "../constants/api";
import { Button } from "@chakra-ui/react"
import Router from 'next/router';


export default function Authentication(){

   const authContext = useContext(AuthContext);  
   const [loggedIn, setLoggedIn] = useState(false);

   const logoutHandler = () => {
       authContext.logout();
       authContext.isLoggedIn = false;
       Router.push('/');
   };

   const getHashParams = useCallback(() => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }, []);

   useEffect(() =>{
    const token = getHashParams().access_token;
    if(token){
        authContext.isLoggedIn = true;
        authContext.token = token;
        setLoggedIn(true)
    } else {
      authContext.isLoggedIn = false;
      authContext.token = null;
      setLoggedIn(false)
    }
   },[authContext]);
   
   return (
       <>
          {loggedIn ? 
          <Button colorScheme="teal" variant="outline" onClick={logoutHandler}>Spotify Logout</Button>
          :<a href={spotifyAuthRedirect}> <Button colorScheme="teal">Spotify login</Button></a>
        }
       </>
   )
}