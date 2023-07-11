import React from 'react'
import SongTile from './SongTile'

const SongList = props => {
  const songListItems = props.songs.map(song => {
    return (
      <SongTile
        key={song.id}
        theNameOfTheSong={song.title}
      />
    )
  })

  return (
    <ul>
      {songListItems}
    </ul>
  )
}

export default SongList