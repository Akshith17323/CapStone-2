import React from 'react';

function PropertyCard(props) {
  const property = {
    id: "PROP001",
    address: "828 Ghose Chowk, Kolkata, West Bengal 757528",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "757528",
    type: "Apartment",
    floorspace_sqft: 1200,
    bedrooms: 3,
    bathrooms: 2,
    price_inr: 25000000,
    parking: 1,
    construction_features: ["elevator", "gym"],
    health_features: {
      walkability_score: 85,
      proximity_to_park_km: 0.5,
      proximity_to_gym_km: 0.2,
      proximity_to_healthcare_km: 1.0,
      proximity_to_healthy_food_market_km: 0.8,
      air_quality_index: 60
    },
    community_features: {
      public_transport_access: "Metro Station (500m)",
      school_rating: 8.5,
      crime_rate: "Low"
    },
    images: [
      {
        url: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
        type: "exterior",
        caption: "Modern apartment building with nearby park access (0.5 km)"
      },
      {
        url: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
        type: "interior",
        caption: "Spacious living area with natural light, promoting wellness"
      },
      {
        url: "https://cdn.pixabay.com/photo/2016/11/29/03/53/apartment-1866777_1280.jpg",
        type: "community",
        caption: "On-site gym facility within the complex"
      }
    ],
    listing_status: "For Sale",
    last_updated: "2025-05-07T12:07:49.255424"
  };

  return (
      <div className="flex w-1/4 h-1/4 bg-stone-50 rounded-lg mb-4 shadow-lg">
        <div className="w-1/2">
          <img
            src={property.images[0].url}
            alt="Property"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="w-1/2 p-4">
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
          <button className="border rounded-lg text-black px-4 py-1 hover:bg-gray-100">
            View  Details
          </button>
        </div>
      </div>
    
  );
}

export default PropertyCard;