import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, CircularProgress } from '@mui/material';

function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5001/api/recipes')
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(err => console.error('Error fetching recipes:', err));
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <List>
      {recipes.map(recipe => (
        <ListItem button key={recipe._id} component={Link} to={`/${recipe._id}`}>
          <ListItemText primary={recipe.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default RecipeList;
