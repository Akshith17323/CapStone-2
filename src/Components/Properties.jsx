import React from 'react';
import PropertyCard from './PropertyCard';

const propertiesData = {
  properties: [
      {
        "id": "PROP001",
        "address": "12 Green Valley, Bandra West, Mumbai, MH 400050",
        "city": "Mumbai",
        "state": "Maharashtra",
        "pincode": "400050",
        "type": "Apartment",
        "floorspace_sqft": 1200,
        "bedrooms": 3,
        "bathrooms": 2,
        "price_inr": 25000000,
        "parking": 1,
        "construction_features": ["elevator", "gym"],
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
        "last_updated": "2025-05-01T10:00:00Z"
      },
      {
        "id": "PROP002",
        "address": "45 Serenity Lane, Koramangala, Bengaluru, KA 560034",
        "city": "Bengaluru",
        "state": "Karnataka",
        "pincode": "560034",
        "type": "Villa",
        "floorspace_sqft": 2000,
        "bedrooms": 4,
        "bathrooms": 3,
        "price_inr": 45000000,
        "parking": 2,
        "construction_features": ["garden", "terrace"],
        "health_features": {
          "walkability_score": 70,
          "proximity_to_park_km": 1.2,
          "proximity_to_gym_km": 0.9,
          "proximity_to_healthcare_km": 2.0,
          "proximity_to_healthy_food_market_km": 1.5,
          "air_quality_index": 45
        },
        "community_features": {
          "public_transport_access": "Bus Stop (300m)",
          "school_rating": 7.8,
          "crime_rate": "Moderate"
        },
        "images": [
          {
            "url": "https://cdn.pixabay.com/photo/2017/08/27/01/48/house-2685250_1280.jpg",
            "type": "exterior",
            "caption": "Elegant villa with private garden for outdoor activities"
          },
          {
            "url": "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg",
            "type": "interior",
            "caption": "Modern kitchen ideal for healthy meal preparation"
          },
          {
            "url": "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg",
            "type": "community",
            "caption": "Nearby park (1.2 km) for recreation and exercise"
          }
        ],
        "listing_status": "For Sale",
        "last_updated": "2025-05-02T12:00:00Z"
      },
      {
        "id": "PROP003",
        "address": "78 Urban Retreat, Vasant Kunj, New Delhi, DL 110070",
        "city": "New Delhi",
        "state": "Delhi",
        "pincode": "110070",
        "type": "Condo",
        "floorspace_sqft": 900,
        "bedrooms": 2,
        "bathrooms": 1,
        "price_inr": 18000000,
        "parking": 1,
        "construction_features": ["balcony", "security"],
        "health_features": {
          "walkability_score": 65,
          "proximity_to_park_km": 0.7,
          "proximity_to_gym_km": 1.5,
          "proximity_to_healthcare_km": 1.8,
          "proximity_to_healthy_food_market_km": 1.0,
          "air_quality_index": 120
        },
        "community_features": {
          "public_transport_access": "Metro Station (800m)",
          "school_rating": 9.0,
          "crime_rate": "Low"
        },
        "images": [
          {
            "url": "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg",
            "type": "exterior",
            "caption": "Condo with balcony and access to green spaces (0.7 km)"
          },
          {
            "url": "https://cdn.pixabay.com/photo/2016/11/29/08/45/apartment-1868797_1280.jpg",
            "type": "interior",
            "caption": "Cozy bedroom with ample ventilation"
          },
          {
            "url": "https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg",
            "type": "community",
            "caption": "Community area with walking paths for daily exercise"
          }
        ],
        "listing_status": "For Rent",
        "rental_price_inr_per_month": 45000,
        "last_updated": "2025-05-03T09:00:00Z"
      }
    ],
  metadata: {
    total_properties: 3,
    last_updated: "2025-05-03T15:00:00Z",
    source: "Health-Oriented Real Estate Database",
    api_version: "1.0",
    image_source: "Pixabay (Royalty-free, commercial use permitted)"
  }
};

function Properties() {
  return (
    <div className="p-5">
      {propertiesData.properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default Properties;