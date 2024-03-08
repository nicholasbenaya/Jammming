import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

function App() {
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

  return (
    <>
      <SearchBar />
      <SearchResults searchResults={searchResults}/>
    </>
  );
}

export default App;
