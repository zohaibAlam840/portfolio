'use client'
// import { HiOutlineHome, HiOutlineCollection, HiOutlineLightBulb, HiOutlineBriefcase } from "react-icons/hi";
// import { FiTool } from "react-icons/fi";
// import Link from "next/link";
import Intro from "./../component/mainCard";
import Tool from "../component/main/Tool";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-bgColor text-white overflow-hidden">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_2.5fr_1fr] gap-5 px-5 py-5">
        {/* Left Column - Sticky Intro */}
        <motion.div
          className="w-full h-auto md:h-screen py-5 md:py-14 md:pl-5 lg:pl-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="sticky top-5 z-10">
            <Intro />
          </div>
        </motion.div>

        {/* Middle Column */}
        <motion.div
          className="w-full h-auto md:h-screen"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}

        >
          <Tool />
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="w-full h-auto md:h-screen border-2 border-black p-5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}

        >
          <div className="text-center md:text-left">
            Column Three
          </div>
        </motion.div>
      </div>
    </div>
  );
}
