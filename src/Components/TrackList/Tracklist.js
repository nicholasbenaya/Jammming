import React from 'react'
import Track from './Track/Track'

function TrackList(props) {
    return (
        <ul>
            {props.tracks.map(track => (
                <Track 
                trackId={track.id}
                trackName={track.name}
                trackArtist={track.artist}
                trackAlbum={track.album}/>
            ))}
        </ul>
    )
}

export default TrackList;