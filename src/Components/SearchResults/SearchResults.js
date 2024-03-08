import React from "react";

function SearchResults(props) {
  return (
    <>
      <h1>Results</h1>
      <ul>
        {props.searchResults.map((track) => (
          <div key={track.id}>
            <h2>{track.name}</h2>
            <p>
              {track.artist} {track.album !== null ? `| ${track.album}` : ""}
            </p>
          </div>
        ))}
      </ul>
    </>
  );
}

export default SearchResults;
