import React, {useContext} from "react";
//import useQueueSong from "../../hooks/useQueueSong";
import useChat from "../../hooks/useChat";
import {AuthContext} from "../../context/context";
import {
  Button,
  Tr,
  Td,
} from "@chakra-ui/react"

const Song = props => {
  const authContext = useContext(AuthContext);
  const { uri, name, artist, sendMessage, ...other } = props;
  //const [queueSong] = useQueueSong(uri);

  if (name) 
  return (
    <Tr>
      <Td>
        {`${name}`}
      </Td>
      <Td>
        {`${artist}`}
      </Td>
      <Td>
      <Button onClick={()=>sendMessage(`${name} - ${artist}`)} colorScheme="teal" size="sm">Add</Button>
      </Td>
    </Tr>
  );

  return <Tr></Tr>;
};

export default Song;
