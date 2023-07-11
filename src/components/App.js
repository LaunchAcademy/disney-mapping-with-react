import React from "react"
import MovieList from "./MovieList"
import SongList from "./SongList"

const App = props => {
  let handleClick = clickedMovieId => {
    let specificSongs = props.importedData.songs.filter(song => song.movieId === clickedMovieId)
    let alertMessage = `The songs for this movie are:\n`
    specificSongs.forEach(song => {
      alertMessage += `${song.title}\n`
    })
    alert(alertMessage)
  }

  const movieData = props.importedData.movies

  return(
    <div className="movie-container">
      <h1>Movies to Watch</h1>
      <MovieList
        movies={movieData}
        buttonClickFunction={handleClick}
      />
      
      <h1>My Favorite Songs</h1>
      <SongList
        songs={props.importedData.songs}
      />
    </div>
  );
};

export default App
