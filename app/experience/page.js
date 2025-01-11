'use client'
import { HiOutlineHome, HiOutlineCollection, HiOutlineLightBulb, HiOutlineBriefcase } from "react-icons/hi";
import { FiTool } from "react-icons/fi";
import Link from "next/link";
import Intro from "./../component/mainCard";
import Expereience from "../component/main/experinec";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-bgColor text-white">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_2.5fr_1fr] gap-5 px-5">
        {/* Left Column - Sticky Intro */}
        <div className="w-full md:h-[100vh] py-5 md:py-10">
          <motion.div
            className="w-full h-auto md:h-[100vh]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-5">
              <Intro />
            </div>
          </motion.div>
        </div>

        {/* Middle Column */}
        <div className="w-full h-auto md:h-[100vh]">
            <Expereience />

        </div>

        {/* Right Column */}
        {/* <div className="w-full h-auto md:h-[100vh] border-2 border-black p-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="text-center md:text-left">
              Column Three
            </div>
          </motion.div>
        </div> */}
      </div>
    </div>
  );
}
