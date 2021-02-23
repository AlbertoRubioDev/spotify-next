import React, {useState} from "react";
import Head from 'next/head';
import Link from 'next/link';
import { Input } from "@chakra-ui/react";
import Sheet from "../components/Sheet";


 function Home(){

  const [room, setRoom] = useState("");

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Input placeholder="large size" size="lg" onChange={(e) => setRoom(e.target.value)} value={room}/>
      <Link href={`/room/${1}`} >
          <a>Go to room</a>
      </Link>
      <Sheet/>
    </>
  );
}

export default Home;
