import { Card, CardBody, Skeleton } from '@chakra-ui/react'

export const GameListSkeleton =()=>{
    return (
        <Card>
         <Skeleton height ="20px"/>
         <CardBody>
             <Skeleton/>
         </CardBody>
        </Card>
       )
}



export const GameCardSkeleton = () => {
  return (
   <Card>
    <Skeleton height ="200px"/>
    <CardBody>
        <Skeleton/>
    </CardBody>
   </Card>
  )
}

