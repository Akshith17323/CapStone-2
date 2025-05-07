import React from 'react';

function PropertyDetails() {
  const property = {
    id: "PROP001",
    address: "12 Green Valley, Bandra West, Mumbai, MH 400050",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400050",
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
    last_updated: "2025-05-01T10:00:00Z"
  };

  return (
    <div className="p-6 bg-stone-900 text-white">
      <h1 className="text-3xl font-bold mb-2">{property.address}</h1>
      <p className="text-xl text-green-400 mb-4">
        ₹{property.price_inr.toLocaleString()}
      </p>
      <img
        src={property.images[0].url}
        alt="Property"
        className="w-full max-w-xl mb-4 rounded"
      />
      <p className="mb-6">{property.images[0].caption}</p>
      <button className='bg-blue-800'>More Images </button>

      <div className="mb-4">
        <h3 className="font-semibold">Details:</h3>
        <ul className="list-disc ml-6">
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Area: {property.floorspace_sqft} sq ft</p>
          <p>Parking: {property.parking ? "Yes" : "No"}</p>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Amenities:</h3>
        <ul className="list-disc ml-6">
          {property.construction_features.map((a, i) => (
            <p key={i}>{a}</p>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PropertyDetails;