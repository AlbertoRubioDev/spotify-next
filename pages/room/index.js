import React, {useEffect, useContext, useCallback } from "react";
import { useRouter } from 'next/router';
import { Spinner } from "@chakra-ui/react"


 function Room(){

    const router = useRouter();

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
        const localRoomId = localStorage.getItem('roomID');
        if(localRoomId){
            const token = getHashParams().access_token;
            if(token){
                localStorage.setItem('user_token',token);
            }
            router.push(`/room/${localRoomId}`)
        } else {
          console.log('no room added');
        }
       },[]);
  
  return <Spinner size="xl" />;
}

export default Room;