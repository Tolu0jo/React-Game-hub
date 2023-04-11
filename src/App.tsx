import React, { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./Hooks/useGenres";
import PlatformMenu from "./components/PlatformMenu";



const App = () => {
 const [selectedGenre,setSelectedGenre] = useState<Genre| null>(null)
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
        <NavBar /> 
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre)} />
        </GridItem>
        </Show>
        <GridItem area='main'>
          <PlatformMenu/>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      
    </Grid>
  );
};

export default App;
