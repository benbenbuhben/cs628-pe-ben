import { useParams } from 'react-router-dom';
import { City } from '../App';

interface CityDetailsProps {
  cities: City[];
}

function CityDetails({ cities }: CityDetailsProps) {
  const { cityId } = useParams();
  const numericId = Number(cityId);

  const city = cities.find((c) => c.id === numericId);

  if (!city) {
    return <p>City not found!</p>;
  }

  return (
    <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
      <h2>{city.name}</h2>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
      {city.description && <p>Description: {city.description}</p>}
    </div>
  );
}

export default CityDetails;
