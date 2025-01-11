import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

export default function InfoCard({ title, image, date, link }) {
  return (
    <div className="relative flex flex-col md:flex-row hover:bg-cardHov text-white rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-600 items-center gap-5 group transform group-hover:scale-105 w-full">
      
      {/* Image Section */}
      <div className="rounded-2xl w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
        <Image 
          src={image} 
          alt="profile image" 
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>

      {/* Title & Date */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{title}</h2>
        <p className="text-sm text-gray-400">{date}</p>
      </div>

      {/* Link (Arrow Icon) */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 md:top-4 md:right-4 text-orange-500 hover:text-orange-600 transition-transform transform group-hover:translate-x-2 group-hover:-translate-y-2"
        >
          <FiArrowUpRight size={20} />
        </a>
      )}
    </div>
  );
}
