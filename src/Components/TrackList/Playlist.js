import React from "react";
import Track from "./Track/Track.js";
import Styles from "./Playlist.module.css";

function Playlist(props) {
  return (
    <form onSubmit={props.onSubmit} name="name" className={Styles.container}>
      <label for="inputPlaylist"><h1>Save to Playlist</h1></label>
      <div className={Styles.inputDiv}>
        <input
          id="inputPlaylist"
          type="text"
          onChange={props.onChange}
          value={props.playlistName}
          className={Styles.inputField}
          placeholder="Enter Playlist Name"
        />
        <input type="submit" value="Save" className={Styles.button} />
      </div>

      <ul className={Styles.list}>
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
    </form>
  );
}

export default Playlist;
