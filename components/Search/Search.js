import React, { useState, useContext, useEffect} from "react";
import Song from "../Song";
import useSearchSong from "../../hooks/useSearchSong";
import {AuthContext} from "../../context/context";
import {
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Skeleton,
  Text,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react"

const Search = ({sendMessage}) => {
  const authContext = useContext(AuthContext);
  const [searchText, setSearchText] = useState("");
  const [loading, searchSong, searchResults] = useSearchSong();
  const [showSearch, setShowSearch] = useState(false);


const handleChange = text => {
  searchSong(text, authContext.token)
  setSearchText(text);
}

useEffect(() => {
  if(authContext.token && authContext.isLoggedIn ){
    setShowSearch(true);
  }
}, [authContext])



if(showSearch){
  return (
      <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Search Songs
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Input value={searchText} placeholder="Search..." onChange={(e) => handleChange(e.target.value)}/>
      <Table>
        <Thead>
          <Tr>
            <Th>Song</Th>
            <Th>Artist</Th>
            <Th>Add</Th>
          </Tr>
      </Thead>
      <Tbody>
      {
          loading ? 
          <>
            <Tr>
              <Td>
              <Skeleton height="40px" />
              </Td>
              <Td>
              <Skeleton height="40px" />
              </Td>
              <Td>
              <Skeleton height="40px" />
              </Td>
            </Tr>
            <Tr>
              <Td>
              <Skeleton height="40px" />
              </Td>
              <Td>
              <Skeleton height="40px" />
              </Td>
              <Td>
              <Skeleton height="40px" />
              </Td>
            </Tr>
            </>
          : null
      }
        {searchResults && searchResults.length && !loading ? (
          searchResults.map(song => 
            <Song
              uri={song?.uri}
              key={song?.uri}
              name={song?.name}
              artist={song?.artists.map(artist => artist.name).join(", ")}
              sendMessage ={sendMessage}
            />
          )
        ) : (
          <Text color="gray.500" isTruncated >Sin resultados</Text>
        )}
        </Tbody>
      </Table>
      </AccordionPanel>
      </AccordionItem>
     </Accordion>
  );
} 

return <p>polisia</p>

};

export default Search;