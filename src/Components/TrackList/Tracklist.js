import React from "react";
import Track from "./Track/Track.js";
import Styles from "./Tracklist.module.css"

function TrackList(props) {
  return (
    <ul className={Styles.container}>
      {props.tracks.map((track) => (
        <li key={track.id}>
          <Track
            trackId={track.id}
            trackName={track.name}
            trackArtist={track.artist}
            trackAlbum={track.album}
            handleAdd={props.handleAdd}
            isRemoval={false}
          />
        </li>
      ))}
    </ul>
  );
}

export default TrackList;
