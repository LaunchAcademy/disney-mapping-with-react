import React from "react"
import SongTile from "./SongTile"

const SongList = (props) => {
  const songTiles = props.songs.map((song) => {
    return <SongTile key={song.id} song={song} />
  })
  return <ul>{songTiles}</ul>
}

export default SongList
