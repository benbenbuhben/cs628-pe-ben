import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

function MovieCard({ movie, onClick }) {
  return (
    <Card onClick={() => onClick(movie.title)} sx={{ maxWidth: 300, cursor: "pointer" }}>
      <CardMedia
        component="img"
        height="140"
        image={movie.image}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.genre} - {movie.releaseYear}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
