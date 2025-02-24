import { Link, Outlet } from 'react-router-dom';
import { City } from '../App';

interface CitiesListProps {
  cities: City[];
}

function CitiesList({ cities }: CitiesListProps) {
  return (
    <div>
      <h1>Cities List</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            {/* Link to the nested route */}
            <Link to={`/${city.id}`}>{city.name}</Link>
          </li>
        ))}
      </ul>

      {/* Nested route content (CityDetails) will appear here */}
      <Outlet />
    </div>
  );
}

export default CitiesList;
