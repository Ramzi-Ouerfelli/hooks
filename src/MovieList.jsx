import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({Movies, searchTitel , searchRating}) => {
  return (
    <div className='List'>
        {Movies
        .filter(el=>el.Titel.toLowerCase().includes(searchTitel.toLowerCase().trim()) && el.rating >= searchRating)
        .map(obj=> <MovieCard el={obj} />)}
        
    </div>
  )
}

export default MovieList