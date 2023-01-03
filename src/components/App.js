import React, { useState } from "react"

import MovieTile from "./MovieTile"

const App = props => {
  // const songsAndMovies = props.songsAndMovies
  const { songsAndMovies } = props

  const movieTileComponents = songsAndMovies.movies.map((movieObject) => {

    // this will grab all of the relevant song objects
    const relevantSongObjects = songsAndMovies.songs.filter((songObject) => {
      return songObject.movieId === movieObject.id
    })

    return (
      <MovieTile 
        title={movieObject.title} 
        songs={relevantSongObjects}
      />
    )
  })


  // ONLY RELEVANT FOR STATE
  const [showSecretContent, changeSecretContentStatus] = useState(false)

  const contentClicker = () => {
    changeSecretContentStatus(!showSecretContent)
  }

  let secretMessage 
  if (showSecretContent === true){
    secretMessage = "Danny is better than minions"
  }

  return(
    <div className="movie-container">
      <h1>Movies to Watch</h1>

      {movieTileComponents}

      <button onClick={contentClicker}>
        Click for Content
      </button>
      {secretMessage}
    </div>
  );
};

export default App


  // const handleClick = clickedMovieId => {
  //   // find the songs for the clicked movie
  //   let specificSongs = props.data.songs.filter(song => song.movieId === clickedMovieId)
  //   // prepare a string to be alerted
  //   let alertMessage = `The songs for this movie are:\n`

  //   // add the songs to alert string
  //   specificSongs.forEach(song => {
  //     alertMessage += `${song.title}\n`
  //   })
  //   // alert
  //   alert(alertMessage)
  // }