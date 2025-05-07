import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function PropertyCard({ property }) {
  const navigate = useNavigate();

  return (
    <div className='flex w-120 h-80 bg-stone-50 rounded-lg mb-4'>
      <div className='w-60 h-70'>
        <img
          src={property.images[0].url}
          alt='Property'
          className='w-full h-full object-cover rounded-l-lg'
        />
      </div>
      <div className='w-60 h-80 p-10'>
        <h2 className='text-black mt-5'>{property.address}</h2>
        <p className='text-black mt-5'>
          {property.listing_status === 'For Rent'
            ? `₹${property.rental_price_inr_per_month.toLocaleString()} / month`
            : `₹${property.price_inr.toLocaleString()} INR`}
        </p>
        <p className='text-black mt-5'>
          {property.bedrooms} BHK | {property.floorspace_sqft} sq ft
        </p>
        <button
          className="border rounded-lg text-black mt-5 px-4 py-1"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/propertyDetails/${property.id}`);
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;