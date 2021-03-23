import React from "react"

const MovieTile = (props) => {
  // debugger
  //  const movieClick = () => {
  //     props.handleClick(props.id)
  //   }
  return(
    <li>
      {props.title}
      <button type="button" onClick={props.movieClick}>See Songs for This Movie</button>
    </li>
  )
}

export default MovieTile
