import React from "react"

const App = props => {

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

  return(
    <div className="movie-container">
      <h1>Movies to Watch</h1>
    </div>
  );
};

export default App
