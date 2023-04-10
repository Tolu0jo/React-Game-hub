import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

const App = () => {
  return (
    // grid layout
    <Grid templateAreas={{
      base:`"nav" "main"`,     //small screens
      lg:`"nav nav" "aside main"`  //1024px
      }}>  
      <GridItem area='nav'>
        <NavBar/>
      </GridItem>
      <Show above ='lg'>
        <GridItem area='aside' >
        Aside
      </GridItem>
      <GridItem area='main' >
        <GameGrid/>
      </GridItem>
      </Show>
      
    </Grid>
  );
};

export default App;
