"use client";

import { motion } from "framer-motion";
import ProCard from "../projeCard";
import porjetOne from "../../assets/p1.png";
import porjetTwo from "../../assets/P2.png";
import porjetThree from "../../assets/p3.png";
import porjetFour from "../../assets/app.jpg";

export default function Detail() {
  return (
    <section className="px-5 py-10 md:p-14">
      {/* Title Section */}
      <motion.h1 
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center md:text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        RECENT<br />
        <span className="text-textCol">PROJECTS</span>
      </motion.h1>

      {/* Responsive Grid Layout */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-8"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

          <ProCard
            title="TechTax"
            image={porjetThree}
            date="Jan 2024 – Present"
            link="https://techtax-ai.vercel.app/"
          />


          <ProCard
            title="ARC Urdu News"
            image={porjetTwo}
            date="Jan 2024 – Present"
            link="https://www.arcurdunews.com/"
          />

          <ProCard
            title="BeautyBuddyAi"
            image={porjetFour}
            date="Jan 2024 – Present"
            link="./detail"
          />

          <ProCard
            title="Finanzbucht"
            image={porjetOne}
            date="Jan 2024 – Present"
            link="https://finanzbucht.vercel.app"
          />
      </motion.div>
    </section>
  );
}
