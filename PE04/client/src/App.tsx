// src/App.tsx

import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CitiesList from './components/CitiesList';
import CityDetails from './components/CityDetails';
import AddCity from './components/AddCity';
import './App.css'; // Make sure to import your CSS

export interface City {
  id: number;
  name: string;
  country: string;
  population: number;
  description?: string;
}

function App() {
  const [cities, setCities] = useState<City[]>([
    { id: 1, name: 'Seattle', country: 'USA', population: 700000 },
    { id: 2, name: 'Tokyo', country: 'Japan', population: 14000000 },
  ]);

  const addCity = (city: Omit<City, 'id'>) => {
    const newCity = {
      id: cities.length + 1,
      ...city,
    };
    setCities([...cities, newCity]);
  };

  return (
    <div className="app">
      {/* Top Header Bar */}
      <header className="app-header">
        <h1 className="app-title">Cities Application</h1>
        <nav className="app-nav">
          <Link to="/">Cities List</Link>
          <Link to="/add">Add City</Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="app-main">
        <Routes>
          {/* Nested Route for City Details */}
          <Route path="/" element={<CitiesList cities={cities} />}>
            <Route path=":cityId" element={<CityDetails cities={cities} />} />
          </Route>

          {/* Add City Route */}
          <Route path="/add" element={<AddCity addCity={addCity} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
