import React from "react"

import MovieList from "./MovieList"
import SongList from "./SongList"

const App = props => {
  const handleClick = (clickedMovieId) => {
    
    // debugger
    
    let specificSongs = props.data.songs.filter((song) => {
      return (
        song.movieId === clickedMovieId
      )
    })

    // debugger

    let alertMessage = `The songs for this movie are:\n`
    specificSongs.forEach(song => {
      alertMessage += `${song.title}\n`
    })

    alert(alertMessage)
  }


  const movies = props.data.movies
  const songs = props.data.songs
  
  // debugger

  return(
    <div className="movie-container">
      <h1>Movies to Watch</h1>
      <MovieList 
        movies={movies}
        handleClick={handleClick}
      />

      <SongList 
        songs={songs}
      />
    </div>
  );
};

export default App
