import React from "react";

interface ServiceCardProps {
  title: string;
  emoji: string;
  tags: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, emoji, tags }) => {
  return (
    <div className="rounded-lg shadow-lg p-4 m-2 w-64 h-64 flex flex-col items-center justify-around text-center bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="text-6xl">{emoji}</div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
