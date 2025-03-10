import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

function AddRecipe() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5001/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    })
      .then(res => res.json())
      .then(() => navigate('/'))
      .catch(err => console.error('Error adding recipe:', err));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4">Add a New Recipe</Typography>
      <TextField
        label="Recipe Name"
        name="name"
        value={recipe.name}
        onChange={handleChange}
        required
      />
      <TextField
        label="Ingredients"
        name="ingredients"
        value={recipe.ingredients}
        onChange={handleChange}
        multiline
        required
      />
      <TextField
        label="Instructions"
        name="instructions"
        value={recipe.instructions}
        onChange={handleChange}
        multiline
        required
      />
      <Button variant="contained" type="submit">Add Recipe</Button>
    </Box>
  );
}

export default AddRecipe;
