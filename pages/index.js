import React, {useState} from "react";
import Head from 'next/head';
import Link from 'next/link';
import { Input, Button } from "@chakra-ui/react";
import Sheet from "../components/Sheet";
import { useRouter } from 'next/router';

 function Home(){

  const router = useRouter()

  const [room, setRoom] = useState("");

  const handleClick = () =>{
    localStorage.setItem('roomID', room);
    router.push(`/room`);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Input placeholder="large size" size="lg" onChange={(e) => setRoom(e.target.value)} value={room}/>
      <Button onClick={handleClick}>
          <a>Go to room {room}</a>
      </Button>
    </>
  );
}

export default Home;
