import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import croppedImageUrl from "../services/image-url";

interface Props{
    onSelectGenre:(genre:Genre)=>void
    selectedGenre: Genre | null
}

const GenreList = ({onSelectGenre,selectedGenre }:Props) => {
  const { data, error, isLoading } = useGenres();
  if(isLoading)return <Spinner/>
  if(error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize='32px'
              borderRadius={8}
              src={croppedImageUrl(genre.image_background)}
            />
            <Button fontWeight={genre.id === selectedGenre?.id?"bold":"normal"} onClick ={()=>{onSelectGenre(genre)}} variant ='link' fontSize="lg">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))} 
    </List>
  );
};

export default GenreList;
