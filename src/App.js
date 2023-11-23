import React, { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import Movies from "./Movies";
import MovieList from "./MovieList";
import BasicModal from "./Add";

function App() {
  const [movies, setMovies] = useState(Movies);
  const [searchTitel, setSearchTitel] = useState("")
  const [searchRating, setSearchRating] = useState(0)
  // state data
  //console.log("movies", movies);
  // i have data
   console.log(searchTitel);

  const add = (newMovie) => {
  //console.log(newMovie);
  setMovies([...movies, newMovie]); 



  };

  return (
    <div className="App">
      <NavBar setSearchTitel={setSearchTitel} setSearchRating={setSearchRating} />
      <MovieList Movies={movies} searchTitel={searchTitel} searchRating={searchRating} />
      <BasicModal ob={add} />
    </div>
  );
}

export default App;
