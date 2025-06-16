import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard';
import Sidebar from './SideBar';

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
    <div className='w-screen h-screen   '>
      <div className='flex '>
        <div className='w-1/5'><Sidebar/></div>

        <div className='w-4/5 flex flex-wrap gap-5 p-5'>
          {properties.map((property) => (
    
              <PropertyCard property={property}/>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default HeroSection;