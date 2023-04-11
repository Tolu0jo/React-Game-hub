import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";

import useGames, { Platform } from "../Hooks/useGames";
import { Genre } from "../Hooks/useGenres";
import CardContainer from "./CardContainer";
import GameCard from "./GameCard";
import {GameCardSkeleton }from "./gameCardSkeleton";

interface Props{
    gameQuery: GameQuery
}
const GameGrid = ({gameQuery}:Props) => {
  const { data, error, isLoading } = useGames (gameQuery);
  const skeletons =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  return ( 
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4}}
        padding='10px'
        spacing={6}>
            {isLoading&& skeletons.map(skeleton=><CardContainer key ={skeleton}   >
                <GameCardSkeleton />
                </CardContainer>)}
        {data.map((game) => (
          <CardContainer key={game.id} >
              <GameCard game={game} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
