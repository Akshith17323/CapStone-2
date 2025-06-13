import React, { useEffect, useState } from 'react';

function HeroSection() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
      fetch('src/assets/data/replicated_real_estate_data.json')
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.properties)
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div>
      <h1>Available Properties</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <strong>{property.city}</strong> {property.address}<br />
            ₹{property.price_inr.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeroSection;