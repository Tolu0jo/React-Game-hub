import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'

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
            <Heading fontSize="2xl">{game.name}</Heading>
            <HStack justifyContent={"space-between"}>
               <PlatformiconList platforms={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic}/> 
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard