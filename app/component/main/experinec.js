"use client";

import { motion } from "framer-motion";
import ExpCard from "../expCard";

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
        +1 YEAR OF<br />
        <span className="text-textCol">EXPERIENCE</span>
      </motion.h1>

      {/* Experience Cards Section */}
      <motion.div 
        className="flex flex-col gap-y-6 mt-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <ExpCard
            title="Freelancer"
            description={[
              "Worked in a 2-man team under a Level 2 Fiverr seller account, collaborating with clients from around the globe.",
              "Managed the entire app development lifecycle, including UI/UX design, coding, testing, and deployment.",
              "Built and deployed TechTax website, ARC News, and five other projects utilizing modern frameworks like Next.js and React Native.",
              "Demonstrated expertise in mobile and web development with scalable solutions.",
            ]}
            date="Aug 2024 – Present"
            link="https://example.com"
          />
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <ExpCard
            title="IRM"
            description={[
              "Reengineered a loan form appraiser's app in Flutter, reducing API latency by 30%.",
              "Contributed to UI/UX optimization, ensuring a seamless user experience.",
            ]}
            date="Dec 2023 – Feb 2024"
            link="https://example.com"
          />
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <ExpCard
            title="Fiverr"
            description={[
              "Designed and developed websites and features for clients across industries.",
              "Used Adobe, Figma, and Illustrator for high-quality design deliverables.",
            ]}
            date="May 2021 – Present"
            link="https://example.com"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
