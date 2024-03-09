import React from "react";
import TrackList from '../TrackList/Tracklist'
function SearchResults(props) {
  return (
    <>
      <h1>Results</h1>
      <TrackList tracks={props.searchResults} handleAdd={props.onClick} />
    </>
  );
}

export default SearchResults;
