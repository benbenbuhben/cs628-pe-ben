import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Button, CircularProgress, Box } from '@mui/material';

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5001/api/recipes/${id}`)
      .then(res => res.json())
      .then(data => {
        setRecipe(data);
        setLoading(false);
      })
      .catch(err => console.error('Error fetching recipe:', err));
  }, [id]);

  if (loading) return <CircularProgress />;
  if (!recipe) return <Typography variant="h6">Recipe not found</Typography>;

  // Handle Delete
  const handleDelete = () => {
    fetch(`http://localhost:5001/api/recipes/${id}`, { method: 'DELETE' })
      .then(() => {
        navigate('/');
      })
      .catch(err => console.error('Error deleting recipe:', err));
  };

  return (
    <Box>
      <Typography variant="h4">{recipe.name}</Typography>
      <Typography variant="h6">Ingredients:</Typography>
      <Typography>{recipe.ingredients}</Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>Instructions:</Typography>
      <Typography>{recipe.instructions}</Typography>
      <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={() => navigate(`/edit/${id}`)}>
        Edit
      </Button>
      <Button variant="contained" color="error" sx={{ marginTop: 2, marginLeft: 1 }} onClick={handleDelete}>
        Delete
      </Button>
    </Box>
  );
}

export default RecipeDetails;
