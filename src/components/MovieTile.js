import React from "react"

const MovieTile = (props) => {
  const clickHandler = () => {
    props.handleClick(props.id)
  }

  return (
    <li>
      {props.title}
      <button type="button" onClick={clickHandler}>
        See Songs for This Movie
      </button>
    </li>
  )
}

export default MovieTile
