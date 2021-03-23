import React from "react"

import SongTile from "./SongTile"

const SongList = (props) => {
  const songTiles = props.songs.map((song) => {
    return (
      <SongTile
        key={song.id}
        songObject={song}
        title={song.title}
      />
    )
  })

  return (
    <div>
      <h1>Song List</h1>
      {songTiles}
    </div>
  ) 
}

export default SongList
