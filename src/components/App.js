import React from "react"

import MovieTile from "./MovieTile";

const App = props => {
  const handleClick = clickedMovieId => {
    // debugger
    
    const specificSongs = props.data.songs.filter(song => {
      // debugger
      if (song.movieId === clickedMovieId) {
        return song
      }
      // return song.movieId === clickedMovieId
    })

    // debugger
    
    let alertMessage = `The songs for this movie are:\n`
    specificSongs.forEach(song => {
      alertMessage += `${song.title}\n`
    })
    
    // debugger
    alert(alertMessage)
  }
  
  // debugger

  const moviesArray = props.data.movies

  const movieTileArray = moviesArray.map((movie) => {
    // <li>{movie.title}</li>
    return (
      <MovieTile 
        title={movie.title}
        id={movie.id}
        key={movie.id}
        handleClick={handleClick}
      />
    )
  })


  return(
    <div className="movie-container">
      <h1>Movies to Watch</h1>

      <ul>
        {movieTileArray}
      </ul>
    </div>
  );
};

export default App
