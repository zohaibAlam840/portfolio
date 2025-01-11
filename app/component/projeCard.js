import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function InfoCard({ title, image, date, link }) {
  const [isExternal, setIsExternal] = useState(false);

  useEffect(() => {
    setIsExternal(link.startsWith("https:"));
  }, [link]);

  return (
    <div className="relative flex flex-wrap md:flex-nowrap bg-black text-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-600 items-center gap-5 group transform group-hover:scale-105">
      
      {/* Image Section */}
      <div className="w-full md:w-32 h-32 flex justify-center">
        <Image 
          src={image} 
          alt="profile image" 
          className="rounded-2xl object-cover h-32 w-auto"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-500">{date}</p>
      </div>

      {/* Action Link */}
      <a
        href={isExternal ? link : `./detail/?title=${title}&image=${image}`}
        target={isExternal ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="absolute top-4 right-4 text-orange-500 hover:text-orange-600 transition-transform transform group-hover:translate-x-2 group-hover:-translate-y-2"
      >
        <FiArrowUpRight size={20} />
      </a>
    </div>
  );
}
