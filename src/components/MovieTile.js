import React from "react"

const MovieTile = (props) => {
  // debugger
  const handleMovieClick = () => {
    console.log("I was clicked!")
    console.log("Movie id is:", props.id)
    props.handleSongMessage(props.id)
  }

  return (
    <li>
      {props.title}
      <button type="button" onClick={handleMovieClick}>
        See Songs for This Movie
      </button>
    </li>
  )
}

export default MovieTile
