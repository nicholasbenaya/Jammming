import React from "react";

function Track(props) {
  const handleAction = () => {
    if (props.isRemoval) {
      return (
        <button onClick={() => props.handleRemove(props.trackId)}>
          Remove Song
        </button>
      );
    } else {
      return (
        <button onClick={() => props.handleAdd(props.trackId)}>Add Song</button>
      );
    }
  };
  return (
    <>
      <h2>{props.trackName}</h2>
      <p>
        {props.trackArtist}{" "}
        {props.trackAlbum !== null ? `| ${props.trackAlbum}` : ""}
      </p>
      {handleAction()}
    </>
      
    
  );
}

export default Track;
