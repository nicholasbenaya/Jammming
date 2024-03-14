import React from "react";
import Track from "./Track/Track.js";

function TrackList(props) {
  return (
    <ul>
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
