'use client'

import { motion } from "framer-motion";
import Intro from "./../component/mainCard";
import Detail from "../component/main/se";
import Resent from "../component/main/resent";
import Expereience from "../component/main/experinec";
import Tools from "../component/main/Tool";
import Link from "next/link";
import GivComp from "../component/git";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-auto bg-bgColor text-white">
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_2.5fr_1fr] gap-5 px-5">
        
        {/* Left Column - Sticky Intro */}
        <motion.div 
          className="w-full h-auto md:h-[200vh] py-10 md:py-14 md:pl-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="sticky top-0 z-10">
            <Intro />
          </div>
        </motion.div>

        {/* Middle Column - Scroll Animations */}
        <div className="w-full h-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Detail />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Resent />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Expereience />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Tools />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <GivComp />
          </motion.div>
        </div>

        {/* Right Column - Scroll Buttons */}
        <motion.div 
          className="w-full h-auto md:h-[200vh] py-10 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="sticky top-0 z-10 flex flex-col gap-3 text-center md:text-left">
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              className="bg-iconCol px-4 py-2 rounded-lg"
            >
              Download Resume
            </motion.button>
            <Link href='https://github.com/zohaibAlam840/My_portfolio' target="_blank">
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                className="bg-iconCol px-4 py-2 rounded-lg"
              >
                Get the Code
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
