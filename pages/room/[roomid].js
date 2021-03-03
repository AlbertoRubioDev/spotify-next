import React, {useEffect} from "react";
import Head from 'next/head';
import Link from 'next/link';
import Sheet from "../../components/Sheet";
import { useRouter } from 'next/router'


 function Room(){

    const router = useRouter()
    const { roomid } = router.query;

    useEffect(() =>{
      localStorage.setItem('roomID', roomid);
    },[]);
  
  return (
    <>
      <Head>
        <title>Room {roomid} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={`/`} >
          <a>Go home</a>
      </Link>
      <Sheet roomId={roomid}/>
    </>
  );
}

export default Room;
