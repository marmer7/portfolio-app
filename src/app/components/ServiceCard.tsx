import React from "react";

// Define the props interface
interface ServiceCardProps {
  title: string;
  description: string;
  emoji: string;
}

// Define the ServiceCard component
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  emoji,
}) => {
  return (
    <div className="rounded-lg shadow-lg p-4 m-2 w-64 h-64 flex flex-col items-center justify-around text-center bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="text-6xl">{emoji}</div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;
