import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../Hooks/useGames";
import CardContainer from "./CardContainer";
import GameCard from "./GameCard";
import GameCardSkeleton from "./gameCardSkeleton";


const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding='10px'
        spacing={10}>
            {isLoading&& skeletons.map(skeleton=><CardContainer>
                <GameCardSkeleton key ={skeleton}/>
                </CardContainer>)}
        {games.map((game) => (
          <CardContainer>
              <GameCard key={game.id} game={game} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
