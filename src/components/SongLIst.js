import React from 'react'
import SongTile from './SongTile'

const SongList = props => {

  const songs = props.songs.map(song => {
    return(
      <SongTile 
        key={song.id}
        title={song.title}
      />
    )
  })

  return(
    <ul>
      {songs}
    </ul>
  )
}

export default SongList 