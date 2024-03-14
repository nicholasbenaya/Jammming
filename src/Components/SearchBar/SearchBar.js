import React from "react";

function SearchBar(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label for="inputTrack">Search for tracks</label>
      <input type="text" id="inputTrack" onChange={props.onChange} value={props.value}/>
      <input type="submit" value="Search"/>
    </form>
  );
}

export default SearchBar;