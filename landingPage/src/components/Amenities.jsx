import React from "react";

export default function Amenities() {
  const amenities = [
    {
      id: 1,
      title: "Swimming Pool",
      description: "A luxurious pool to relax and unwind.",
      image: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    },
    {
      id: 2,
      title: "Fitness Center",
      description: "State-of-the-art equipment for your workouts.",
      image: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    },
    {
      id: 3,
      title: "Spa Services",
      description: "Relax and rejuvenate with premium spa services.",
      image: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    },
    {
      id: 4,
      title: "Kids Play Area",
      description: "Safe and fun space for your children to enjoy.",
      image: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    },
    {
      id: 5,
      title: "24/7 Security",
      description: "Ensuring your safety at all times.",
      image: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    },
    {
      id: 6,
      title: "Clubhouse",
      description: "A vibrant place for community gatherings.",
      image: "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4">
      {/* Section Heading */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Amenities</h1>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {amenities.map((amenity) => (
          <div
            key={amenity.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center text-center p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img src={amenity.image} alt={amenity.title} className="w-24 h-24 object-cover mb-4 rounded-full" />
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{amenity.title}</h2>
            <p className="text-sm text-gray-600">{amenity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
