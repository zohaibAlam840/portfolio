import Link from "next/link";
import { HiOutlineHome, HiOutlineCollection, HiOutlineLightBulb, HiOutlineBriefcase } from "react-icons/hi";
import { FiTool } from "react-icons/fi";
export default function nav () {

    return(
        <div className="flex w-screen mx-4 my-2 justify-center p-5">
        <nav className="bg-navColor w-auto h-auto rounded-2xl px-6 py-3 flex gap-9 justify-center">
          <Link href={'/home'} className="group relative">
            <HiOutlineHome size={24} />
            <span className="absolute left-1/2 top-2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all duration-500 rounded-2xl px-4 py-2 font-bold bg-navColor">
              Home
            </span>
          </Link>
          <Link href={'/project'} className="group relative">
            <HiOutlineCollection size={24} />
            <span className="absolute left-1/2 top-2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all duration-500 rounded-2xl px-4 py-2 font-bold bg-navColor">
              Project
            </span>
          </Link>

          <Link href={'/experience'} className="group relative">
            <HiOutlineBriefcase size={24} />
            <span className="absolute left-1/2 top-2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all duration-500 rounded-2xl px-4 py-2 font-bold bg-navColor">
              Experience
            </span>
          </Link>
          <Link href={'/tech'} className="group relative">
            <FiTool size={24} />
            <span className="absolute left-1/2 top-2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-8 transition-all duration-500 rounded-2xl px-4 py-2 font-bold bg-navColor">
              Tools
            </span>
          </Link>
        </nav>
      </div>
    )
}