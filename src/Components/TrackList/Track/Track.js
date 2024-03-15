import React from "react";
import Styles from "./Track.module.css";

function Track(props) {
  const handleAction = () => {
    if (props.isRemoval) {
      return (
        <button
          onClick={() => props.handleRemove(props.trackId)}
          className={Styles.button}
        >
          REMOVE
        </button>
      );
    } else {
      return (
        <button
          onClick={() => props.handleAdd(props.trackId)}
          className={Styles.button}
        >
          ADD
        </button>
      );
    }
  };
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.track}>
          <h2 className={Styles.title}>{props.trackName}</h2>
          <p>
            {props.trackArtist}{" "}
            {props.trackAlbum !== null ? `| ${props.trackAlbum}` : ""}
          </p>
        </div>
        {handleAction()}
      </div>
      <hr className={Styles.ruler} />
    </>
  );
}

export default Track;
