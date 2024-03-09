import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  /**
   * Using useState Hook, creating searchResults array to store user's search results
   * Current initial state of the searchResults array is mocked for testing purposes (will be replaced with the actual data from the API)
   */
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Batajnica Air Base",
      artist: "Ellissa Tregidgo",
      album: "LYBT",
    },
    {
      id: 2,
      name: "Harry P Williams Memorial Airport",
      artist: "Loella Kennerley",
      album: "KPTN",
    },
    { id: 3, name: "São Borja Airport", artist: "Lem Alf", album: "SSSB" },
    {
      id: 4,
      name: "Tucumcari Municipal Airport",
      artist: "Evvy Dadge",
      album: "KTCC",
    },
    { id: 5, name: "El Petén Airport", artist: "Jud Cornford", album: null },
  ]);


  /**
   * Using useState Hook, creating a playlists array to store user's playlist
   * Current initial state of the playlists array is using one of the searchResults array value for testing purposes
   */
  const [playlists, setPlaylists] = useState([
    { id: 5, name: "El Petén Airport", artist: "Jud Cornford", album: null },
  ]);

  /**
   * Handling Add to Playlist functionality to each of the searchResults track using the id parameter
   * This function gets passed to the SearchResults Component
   * @param {*} id
   */
  const handleAdd = (id) => {
    const trackIndex = searchResults.findIndex((result) => result.id === id); // retrieving the index of the selected track using its id
    const isOnPlaylist = playlists.findIndex((playlist) => playlist.id === id); // see if the playlists array had a track with the id of selected track's id. Will return -1 if there's none.
    if (isOnPlaylist === -1) {
      setPlaylists((prev) => [...prev, searchResults[trackIndex]]); // set the current playlists array state into previous state along with a track from searchResults with the id of trackIndex
    }
  };

  /**
   * Handling Remove from Playlist functionality to each of the playlists track using the id parameter
   * This function gets passed to the Playlist Component
   * @param {*} id
   */
  const handleRemove = (id) => {
    setPlaylists(playlists.filter((track) => track.id !== id)); // set the current playlist array state to have the value of an array that has no track with the id of selected track's id
  };


  /**
   * Using useState Hook, creating a playlistName state to store the value of the user's playlist name
   */
  const [playlistName, setPlaylistName] = useState("");
  /**
   * Handling onChange functionality on the Playlist Component input element
   * This function gets passed to the Playlist Component
   * @param {*} param0
   */
  const handleChange = ({ target }) => {
    setPlaylistName(target.value); // set the playlistName state to have the value of the input element
  };
  /**
   * TODO: Handling submit functionality on the Playlist Component
   * @param {*} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();
  };


  return (
    <>
      <SearchBar />
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
