import { Image, ImageProps } from '@chakra-ui/react';
import bullEye from '../assets/Emojis/bulls-eye.webp';
import meh from "../assets/Emojis/meh.webp";
import thumbsup from "../assets/Emojis/thumbs-up.webp";
interface Props{
    rating:number
}

const Emoji = ({rating}:Props) => { 
    if (rating<3) return null

    const emoji : {[key:number]:ImageProps} ={
        3:{src:meh,alt:'meh',boxSize:'20px'},
        4:{src:bullEye,alt:'recommended',boxSize:'25px'},
        5:{src:thumbsup,alt:'exceptional',boxSize:'20px'},

    }
  return (
    
    <Image{...emoji[rating]} marginTop={1}/>
  )
}

export default Emoji