import React from 'react';

const PropertyDetails = () => {
  const property  = {
      "id": "PROP001",
      "address": "828 Ghose Chowk, Kolkata, West Bengal 757528",
      "city": "Kolkata",
      "state": "West Bengal",
      "pincode": "757528",
      "type": "Apartment",
      "floorspace_sqft": 1200,
      "bedrooms": 3,
      "bathrooms": 2,
      "price_inr": 25000000,
      "parking": 1,
      "construction_features": [
        "elevator",
        "gym"
      ],
      "health_features": {
        "walkability_score": 85,
        "proximity_to_park_km": 0.5,
        "proximity_to_gym_km": 0.2,
        "proximity_to_healthcare_km": 1.0,
        "proximity_to_healthy_food_market_km": 0.8,
        "air_quality_index": 60
      },
      "community_features": {
        "public_transport_access": "Metro Station (500m)",
        "school_rating": 8.5,
        "crime_rate": "Low"
      },
      "images": [
        {
          "url": "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
          "type": "exterior",
          "caption": "Modern apartment building with nearby park access (0.5 km)"
        },
        {
          "url": "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
          "type": "interior",
          "caption": "Spacious living area with natural light, promoting wellness"
        },
        {
          "url": "https://cdn.pixabay.com/photo/2016/11/29/03/53/apartment-1866777_1280.jpg",
          "type": "community",
          "caption": "On-site gym facility within the complex"
        }
      ],
      "listing_status": "For Sale",
      "last_updated": "2025-05-07T12:07:49.255424"
    }
  return (
    <div className="p-10  text-white bg-sky-950 min-h-screen w-screen ">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {property.images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img.url}
              alt={img.caption}
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-sm mt-1 text-gray-300">{img.caption}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Property Overview</h2>
          <p>Address: {property.address}</p>
          <p>Type: {property.type}</p>
          <p>Size: {property.floorspace_sqft} sq ft</p>
          <p>Bedrooms: {property.bedrooms}</p>
          <p>Bathrooms: {property.bathrooms}</p>
          <p>Parking: {property.parking ? 'Yes' : 'No'}</p>
          <p>Features: {property.construction_features.join(', ')}</p>
          <p>Price: ₹{property.price_inr.toLocaleString()}</p>
          <p>Status: {property.listing_status}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Community & Health</h2>
          <div>
            <h3 className="text-lg font-semibold">Community Features</h3>
            <p>Transport: {property.community_features.public_transport_access}</p>
            <p>School Rating: {property.community_features.school_rating}</p>
            <p>Crime Rate: {property.community_features.crime_rate}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mt-4">Health Features</h3>
            <p>Walkability Score: {property.health_features.walkability_score}</p>
            <p>Park Distance: {property.health_features.proximity_to_park_km} km</p>
            <p>Gym Distance: {property.health_features.proximity_to_gym_km} km</p>
            <p>Healthcare Distance:{property.health_features.proximity_to_healthcare_km} km</p>
            <p>Healthy Food Market: {property.health_features.proximity_to_healthy_food_market_km} km</p>
            <p>Air Quality Index: {property.health_features.air_quality_index}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;