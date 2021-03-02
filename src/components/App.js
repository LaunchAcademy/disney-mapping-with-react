import React from "react"
import MovieList from './MovieList'
import SongList from "./SongLIst"

const App = props => {
  
  let handleMovieClick = clickedMovieId => {
    let specificSongs = props.data.songs.filter(song => song.movieId === clickedMovieId)
    let alertMessage = `The songs for this movie are:\n`
    specificSongs.forEach(song => {
      alertMessage += `${song.title}\n`
    })
    alert(alertMessage)
  }

  return(
    <div className="movie-container">
      <h1>Movies to Watch</h1>
      <div className="movieList">
      <MovieList 
        movies={props.data.movies}
        handleClick={handleMovieClick}
      />
      </div>
      <div>
      <SongList 
        songs={props.data.songs}
      />
      </div>
    </div>
  );
};

export default App
