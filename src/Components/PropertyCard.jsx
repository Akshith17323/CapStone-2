import React from 'react';
import { useNavigate } from 'react-router-dom';

function PropertyCard({property}) {
  const navigate = useNavigate()
    

  return (
      <div className="flex w-1/3 p-5 mt-5 overflow-hidden bg-sky-950 rounded-lg mb-4 shadow-lg ">
        <div className="w-1/2">
          <img
            src={property.images[0].url}
            alt="Property"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="w-1/2 m-4 p-4  rounded-lg ">
          <label className='font-semibold'>Address</label>
          <h2 className="text-black text-sm  mb-3">{property.address}</h2>
          <label className='font-semibold'>Price : </label>
          <p className="text-black mb-2">
            {property.listing_status === 'For Rent'
              ? `₹${property.rental_price_inr_per_month} / month`
              : `₹${property.price_inr} INR`}
          </p>
          <label className='font-semibold'>Details :</label>
          <p className="text-black mb-4">
            {property.bedrooms} BHK , {property.floorspace_sqft} sq ft
          </p>
          <button className="border rounded-lg text-black px-4 py-1 hover:bg-gray-100" onClick={(e)=>{
                e.preventDefault()
                navigate('/propertyDetails')
              }
              }>
            View  Details
          </button>
        </div>
      </div>
    
  );
}

export default PropertyCard;