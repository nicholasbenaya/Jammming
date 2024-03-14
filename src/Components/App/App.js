import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";
import Spotify from "../../util/Spotify.js";

function App() {
  // searchResults state handling
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Up in the Clouds",
      album: "Up in the Clouds",
      artist: "Skegss",
      uri: "spotify:track:440m8MPuMzg5PkipV7Sh45",
    },
    {
      id: 2,
      name: "Got on my Skateboard",
      album: "Got on my Skateboard",
      artist: "Skegss",
      uri: "spotify:track:4b4xM3m8KKK9LH8Zw2HN1K",
    },
    {
      id: 3,
      name: "Save it for the Weekend",
      album: "Save it for the Weekend",
      artist: "Skegss",
      uri: "spotify:track:11cVt2IAfcDvrz98EhjDgc",
    },
    {
      id: 4,
      name: "Down to Ride",
      album: "Rehearsal",
      artist: "Skegss",
      uri: "spotify:track:0BvQ8hZcZ0qHaIq4dNtivb",
    },
    {
      id: 5,
      name: "Heart Attack",
      album: "50 Pushups for a Dollar",
      artist: "Skegss",
      uri: "spotify:track:4OwSeTHiPX0IaIptOa8s6T",
    },
  ]);
  const handleSearchInput = async ({ target }) => {
    setSearchInput(target.value);
  };
  const handleSearch = async (event) => {
    try {
      event.preventDefault();
      const tracks = await Spotify.searchForTracks(searchInput);
      setSearchResults(tracks);
      setSearchInput("");
    } catch (error) {
      console.log("Error while fetching for tracks: ", error);
    }
  };

  // tracks on playlists state handling
  const [playlists, setPlaylists] = useState([]);
  const handleAdd = (id) => {
    const trackIndex = searchResults.findIndex((result) => result.id === id);
    const isOnPlaylist = playlists.findIndex((playlist) => playlist.id === id);
    if (isOnPlaylist === -1) {
      setPlaylists((prev) => [...prev, searchResults[trackIndex]]);
    }
  };
  const handleRemove = (id) => {
    setPlaylists(playlists.filter((track) => track.id !== id));
  };

  // playlistName state handling
  const [playlistName, setPlaylistName] = useState("");
  const handleChange = ({ target }) => {
    setPlaylistName(target.value);
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const trackUris = playlists.map((track) => track.uri);
      await Spotify.addTracksToPlaylist(playlistName, trackUris);
      setPlaylistName("");
      setPlaylists([]);
    } catch (error) {
      console.error("Error occured while saving playlist: ", error);
    }
  };

  return (
    <>
      <SearchBar
        onChange={handleSearchInput}
        onSubmit={handleSearch}
        value={searchInput}
      />
      <SearchResults searchResults={searchResults} onClick={handleAdd} />
      <Playlist
        onChange={handleChange}
        playlistName={playlistName}
        onSubmit={handleSubmit}
        onRemove={handleRemove}
        playlists={playlists}
      />
    </>
  );
}

export default App;
