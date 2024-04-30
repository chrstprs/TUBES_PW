import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlaceCard = ({ img, title, location, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleFullDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <img
        src={img}
        alt={title}
        className="w-full h-40 sm:h-48 object-cover cursor-pointer"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-2 opacity-70">
          <IoLocationSharp />
          <span>{location}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {showFullDescription ? description : `${description.slice(0, 100)}...`}
        </p>
        <button
          onClick={toggleFullDescription}
          className="mt-2 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300"
        >
          {showFullDescription ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;
