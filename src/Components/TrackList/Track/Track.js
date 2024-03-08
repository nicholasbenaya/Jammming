import React from 'react'

function Track(props) {
    return (
        <div key={props.trackId}>
            <h2>{props.trackName}</h2>
            <p>{props.trackArtist} {props.trackAlbum !== null ? `| ${props.trackAlbum}` : ""} </p>
        </div>
    )
}

export default Track;