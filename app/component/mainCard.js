import Image from "next/image";
import imageProfile from "../assets/i1.jpeg";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';

export default function Card() {
  return (
    <div className="flex items-center justify-center h-auto w-full px-4">
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white text-black rounded-2xl flex flex-col items-center p-6 sm:p-10 shadow-lg overflow-hidden">
        
        {/* Background Dotted Circles */}
        <div className="absolute -top-16 -left-16 w-40 h-40 sm:w-64 sm:h-64 rounded-full border-4 border-dashed border-iconCol"></div>
        <div className="absolute -bottom-16 -right-16 w-32 h-32 sm:w-44 sm:h-44 rounded-full border-4 border-dashed border-iconCol"></div>

        {/* Profile Image */}
        <div className="border-2 w-40 h-40 sm:w-56 sm:h-56 rounded-2xl overflow-hidden">
          <Image 
            src={imageProfile} 
            alt="profile image" 
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name */}
        <h2 className="text-lg sm:text-2xl font-bold mt-5">Zohaib Alam</h2>

        {/* Description */}
        <p className="text-sm sm:text-lg text-center text-gray-500 mt-3">
          A Software Engineer who <br /> has developed countless innovative solutions.
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-5 mt-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram size={28} className="text-orange-500 hover:scale-110 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin size={28} className="text-blue-600 hover:scale-110 transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub size={28} className="text-gray-800 hover:scale-110 transition" />
          </a>
          <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineMail size={28} className="text-red-500 hover:scale-110 transition" />
          </a>
        </div>
      </div>
    </div>
  );
}
