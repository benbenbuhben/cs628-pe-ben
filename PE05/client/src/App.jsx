import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  CssBaseline,
  Box
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipe from './components/AddRecipe';

// 1) Define your custom theme (optional)
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // or any color you prefer
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
    // Add any typography customizations here
  },
});

function Layout() {
  return (
    <>
      {/* 2) Top Navigation Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Recipe Finder
          </Typography>
          {/* Nav Buttons */}
          <Button color="inherit" component={Link} to="/">
            Recipes
          </Button>
          <Button color="inherit" component={Link} to="/add">
            Add Recipe
          </Button>
        </Toolbar>
      </AppBar>

      {/* 3) Main Content Area */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {/* The Outlet renders whichever route is active */}
        <Outlet />
      </Container>
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<RecipeList />} />
            <Route path="add" element={<AddRecipe />} />
            <Route path=":id" element={<RecipeDetails />} />
          </Route>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
