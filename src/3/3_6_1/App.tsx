import { useState } from 'react';
import { places, PlaceType } from './data';
import PlaceImage from './placeimage.tsx'; 

export default function App() {
  const [isLarge, setIsLarge] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => setIsLarge(e.target.checked)}
        />
        Use large images
      </label>
      <hr />
      <List />
    </>
  );
}

function List() {
  return (
    <ul>
      {places.map(place => (
        <li key={place.id}>
          <Place place={place} />
        </li>
      ))}
    </ul>
  );
}

function Place({ place }: { place: PlaceType }) {
  return (
    <>
      <PlaceImage place={place} /> {/* ✅ Теперь PlaceImage используется */}
      <p>
        <b>{place.name}</b>: {place.description}
      </p>
    </>
  );
}
