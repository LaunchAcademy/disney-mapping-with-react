import React from "react"

const MovieTile = (props) => {
  const handleClickFunction = () => {
    props.clickFunction(props.id)
  }

  return(
    <li>
      {props.title}
      <button
        type="button"
        onClick={handleClickFunction}
      >
        See Songs for This Movie
      </button>
    </li>
  )
}

export default MovieTile
