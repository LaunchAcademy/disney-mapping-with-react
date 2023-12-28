import React from "react"

const MovieTile = (props) => {
  // debugger
  // console.log(props);

  const buttonClick = () => {
    console.log("I was clicked!");
    props.handleClick(props.id)
  }

  return(
    <li>
      {props.title}
      <button onClick={buttonClick} type="button">See Songs for This Movie</button>
    </li>
  )
}

export default MovieTile
