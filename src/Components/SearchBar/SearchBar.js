import React from "react";

function SearchBar() {
  return (
    <form>
      <label for="inputTrack">Search for tracks</label>
      <input type="text" id="inputTrack" />
      <input type="submit" value="Search"/>
    </form>
  );
}

export default SearchBar;