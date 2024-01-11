import React, { useState } from "react";
import './App.css';
import MovieslistView from "./components/MovieList";
import FilterMovie from "./components/FilterMovie";
import { DefautlMovies } from "./components/Movies";
function App() {
  /* movieslist state take by default the list from Movies file */
  const [movies, setMovies] = useState(DefautlMovies)
  /* 2 state for filtring by title/rating */
  const [filterbytitle, setFilterbytitle] = useState("")
  const [filterbyrating, setFilterbyrating] = useState(0)

  /* function to add new movie to the movies list */
  const addMovie = (newMovie) => {
    setMovies([newMovie, ...movies]);
  };
  return (
    <div className="App">
      {/* first row to display the filtring components */}
      <div class="row">
        <FilterMovie
          setFilterbytitle={setFilterbytitle}
          setFilterbyrating={setFilterbyrating}
          rating={filterbyrating}
          addMovie={addMovie}
        />
      </div>
      <div class="row">
        {/* second row to display the movies list */}
        <MovieslistView
          moviesList={movies}
          titlefilter={filterbytitle}
          ratingfilter={filterbyrating}
        />
      </div>
    </div>
  );
}

export default App;