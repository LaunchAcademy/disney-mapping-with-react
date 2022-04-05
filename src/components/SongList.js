import React from "react"

const SongList = (props) => {
  // debugger
  
  const songsArray = props.songs.map((song) => {
    // debugger
    return (
      <li key={song.id}>
        {song.title}
      </li>
    )
  })

  // debugger
  return (
    <div>
      <h2>Song List</h2>
      <ul>
        {songsArray}
      </ul>
    </div>
  )
}

export default SongList