import React from "react"

const MovieTile = (props) => {
  const handleButtonClick = () => {
    console.log("hello!");
    // debugger
    props.handleClick(props.id)
  }

  return(
    <li>
      {props.title}
      <button type="button" onClick={handleButtonClick}>See Songs for This Movie</button>
    </li>
  )
}

export default MovieTile
