import React from "react"
import SongTile from "./SongTile"

const SongList = (props) => {
  const songComponents = props.songs.map((song) => {
    // debugger
    return (
      <SongTile
        key={song.id}
        song={song}
      />
    )
  })

  // debugger
  
  return (
    <>
      <h1>Songs to Listen To</h1>
      <ul>
        {songComponents}
      </ul>
    </>
  )
}

export default SongList