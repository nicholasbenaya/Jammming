import React from "react";
import Track from "../TrackList/Track/Track";

function Playlist(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" onChange={props.onChange} value={props.playlistName} />
      <ul>
        {props.playlists.map((track) => (
          <>
            <Track
              trackId={track.id}
              trackName={track.name}
              trackArtist={track.artist}
              trackAlbum={track.album}
            />
            <button onClick={() => props.onRemove(track.id)} >Remove Song</button>
          </>
        ))}
      </ul>
      <input type="submit" value="Add to Spotify" />
    </form>
  );
}

export default Playlist;
