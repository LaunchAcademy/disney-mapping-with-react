import React from "react"

const MovieTile = (props) => {

  const handleButtonClick = () => {
    let stringOfRelevantSongs = "The relevant songs for this movie are:\n"

    props.songs.forEach((songObjects) => {
      stringOfRelevantSongs += `${songObjects.title}\n`
    })

    alert(stringOfRelevantSongs)
  }

  return(
    <li>
      {props.title}
      <button type="button" onClick={handleButtonClick}>
        See Songs for This Movie
      </button>
    </li>
  )
}

export default MovieTile
