import { FiArrowUpRight } from "react-icons/fi";

export default function InfoCard({ title, description, date, link }) {
  return (
    <div className="relative bg-black text-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      {/* Description */}
      {Array.isArray(description) ? (
        <ul className="text-gray-400 mb-4 list-disc pl-5">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 mb-4">{description}</p>
      )}

      {/* Date */}
      <p className="text-sm text-gray-500">{date}</p>

      {/* Optional Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 text-orange-500 hover:text-orange-600"
        >
          <FiArrowUpRight size={20} />
        </a>
      )}
    </div>
  );
}
