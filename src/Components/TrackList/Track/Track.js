import React from "react";

function Track(props) {
  return (
    <li key={props.trackId}>
      <h2>{props.trackName}</h2>
      <p>
        {props.trackArtist}{" "}
        {props.trackAlbum !== null ? `| ${props.trackAlbum}` : ""}
      </p>
    </li>
  );
}

export default Track;
