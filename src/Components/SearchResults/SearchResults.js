import React from "react";
import TrackList from "../TrackList/Tracklist.js";
import Styles from "./SearchResults.module.css";
function SearchResults(props) {
  return (
    <div className={Styles.container}>
      <h1>Search Results</h1>
      <TrackList tracks={props.searchResults} handleAdd={props.onClick} />
    </div>
  );
}

export default SearchResults;
