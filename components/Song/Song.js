import React from "react";
import {
  Button,
  Tr,
  Td,
} from "@chakra-ui/react"

const Song = props => {
  const { uri, name, artist, sendMessage, ...other } = props;

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
