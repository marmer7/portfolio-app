import React from "react";

interface ServiceCardProps {
  title: string;
  emoji: string;
  tags: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, emoji, tags }) => {
  return (
    <div className="m-2 flex h-64 w-64 flex-col items-center justify-around rounded-lg bg-white p-4 text-center shadow-lg transition-colors duration-200">
      <div className="text-6xl">{emoji}</div>
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
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
