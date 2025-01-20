import React, { useState, useMemo } from "react";
import { Grid, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import MovieCard from "./MovieCard";
import movies from "../data/movies";

function MovieList() {
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const uniqueGenres = useMemo(
    () => ["All Genres", ...new Set(movies.map(({ genre }) => genre))],
    []
  );

  const filteredMovies = useMemo(
    () =>
      selectedGenre === "All Genres"
        ? movies
        : movies.filter(({ genre }) => genre === selectedGenre),
    [selectedGenre]
  );

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleMovieClick = (title) => {
    alert(`You selected: ${title}`);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 200, marginBottom: 4 }}>
        <InputLabel id="genre-select-label">Genre</InputLabel>
        <Select
          labelId="genre-select-label"
          id="genre-select"
          value={selectedGenre}
          onChange={handleGenreChange}
          label="Genre"
        >
          {uniqueGenres.map((genre) => (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        {filteredMovies.map((movie) => (
          <Grid item key={movie.title} xs={12} sm={6} md={4}>
            <MovieCard movie={movie} onClick={handleMovieClick} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MovieList;
