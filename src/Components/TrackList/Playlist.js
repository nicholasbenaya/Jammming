import React from "react";
import Track from "./Track/Track.js";

function Playlist(props) {
  return (
    <form onSubmit={props.onSubmit} name="name">
      <input type="text" onChange={props.onChange} value={props.playlistName} />
      <ul>
        {props.playlists.map((track) => (
          <li key={track.id}>
            <Track
              trackId={track.id}
              trackName={track.name}
              trackArtist={track.artist}
              trackAlbum={track.album}
              isRemoval={true}
              handleRemove={props.onRemove}
            />
          </li>
        ))}
      </ul>
      <input type="submit" value="Add to Spotify" />
    </form>
  );
}

export default Playlist;
