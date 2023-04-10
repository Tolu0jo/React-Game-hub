import React from 'react'
import useGenres from '../Hooks/useGenres'

const GenreList = () => {
    const {genres,error,isLoading}=useGenres()
  return (
    <ul>
        {genres.map(genre =><li key={genre.id}>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList