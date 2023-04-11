import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'

import React from 'react'
import { Game } from '../Hooks/useGames'
import croppedImage from '../services/image-url'
import CriticScore from './CriticScore'
import PlatformiconList from './PlatformiconList'

interface Props{
    game:Game
}
const GameCard = ({game}:Props) => {
  return (
    <Card >
        <Image src={croppedImage(game.background_image)}/>
        <CardBody>
            <HStack justifyContent={"space-between"} marginBottom={3}>
               <PlatformiconList platforms={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic}/> 
            </HStack>
             <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard