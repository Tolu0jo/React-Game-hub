import React, { useState } from "react";
import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./Hooks/useGenres";
import PlatformMenu from "./components/PlatformMenu";
import { Platform } from "./Hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery{
  genre: Genre|null;
  platform: Platform | null;
  sort:string;
  searchText: string
}


const App = () => {
const[gameQuery,setGameQuery] = useState<GameQuery>({}as GameQuery)
  return (
    // grid layout
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //small screens
        lg: `"nav nav" "aside main"`, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr"
      }}
      >
      <GridItem area='nav'>
        <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery, searchText})}/> 
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery,genre})} />
        </GridItem>
        </Show>
        <GridItem area='main'>
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery}/>
            <Flex  marginBottom={2}>
              <PlatformMenu selectedPlatform={gameQuery.platform} onSelectPlatForm={(platform)=>setGameQuery({...gameQuery,platform})}/>
             <Box marginLeft={3}>
              <SortSelector sortOrder={gameQuery.sort} onselectSort={(sort)=>setGameQuery({...gameQuery,sort})}/>
            </Box>
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>  
      
    </Grid>
  );
};
 
export default App;
