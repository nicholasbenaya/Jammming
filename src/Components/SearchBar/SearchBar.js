import React from "react";
import Styles from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <form onSubmit={props.onSubmit} className={Styles.container}>
      <label for="inputTrack">
        <h1 className={Styles.title}>Jammming Project</h1>
      </label>
      <input
        type="text"
        id="inputTrack"
        onChange={props.onChange}
        value={props.value}
        className={Styles.input}
        placeholder="Search for Tracks"
      />
      <input type="submit" value="Search" className={Styles.button} />
    </form>
  );
}

export default SearchBar;
