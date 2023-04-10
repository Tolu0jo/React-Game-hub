import { Card, CardBody, Skeleton } from '@chakra-ui/react'




const GameCardSkeleton = () => {
  return (
   <Card>
    <Skeleton height ="200px"/>
    <CardBody>
        <Skeleton/>
    </CardBody>
   </Card>
  )
}

export default GameCardSkeleton