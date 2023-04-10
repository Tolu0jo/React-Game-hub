import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    // grid layout
    <Grid templateAreas={{
      base:`"nav" "main"`,//small screens
      lg:`"nav nav" "aside main"`//1024px
      }}>  
      <GridItem area='nav' bg='coral'>
        Nav
      </GridItem>
      <Show above ='lg'>
        <GridItem area='aside' bg='gold'>
        Aside
      </GridItem>
      <GridItem area='main' bg='dodgerblue'>
        Main
      </GridItem>
      </Show>
      
    </Grid>
  );
};

export default App;
