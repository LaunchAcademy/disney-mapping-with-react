import React from "react"

const MovieTile = (props) => {
  // console.log(props);
  
  const clickButton = () => {
    console.log("button was clicked!");
    props.handleClick(props.id)
  }

  return(
    <li>
      {props.title}
      <button type="button" onClick={clickButton}>See Songs for This Movie</button>
    </li>
  )
}

export default MovieTile
