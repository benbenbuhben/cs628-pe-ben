import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { City } from '../App';

interface AddCityProps {
  addCity: (city: Omit<City, 'id'>) => void;
}

function AddCity({ addCity }: AddCityProps) {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  // Store population as a string
  const [population, setPopulation] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Convert population string to a number on submission
    const newCityData = {
      name,
      country,
      population: Number(population) || 0, // fallback to 0 if empty
      description,
    };

    addCity(newCityData);
    navigate('/');
  };

  return (
    <div>
      <h1>Add City</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Country: </label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Population: </label>
          <input
            type="number"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Description: </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit">Add City</button>
      </form>
    </div>
  );
}

export default AddCity;
