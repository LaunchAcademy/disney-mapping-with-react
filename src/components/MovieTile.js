import React from 'react'

const MovieTile = props => {
  return(
    <li>{props.title}
    <button type="button" onClick={props.handleClick}> Click here to see the song list </button>
    </li>
  )
}

export default MovieTile