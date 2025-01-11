import { motion } from "framer-motion";

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
        SOFTWARE<br />
        <span className="text-textCol">ENGINEER</span>
      </motion.h1>

      {/* Description */}
      <motion.p 
        className="mt-4 text-lg text-coloPar text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Dedicated to crafting seamless user experiences with a focus on design excellence and robust backend solutions. 
        Skilled in turning concepts into functional, scalable, and visually stunning digital products.
      </motion.p>

      {/* Statistics */}
      <motion.div 
        className="flex flex-wrap justify-center md:justify-start mt-16 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {[
          { value: "+01", label: "YEARS OF \n EXPERIENCE" },
          { value: "+10", label: "COMPLETED \n PROJECTS" },
          { value: "+06", label: "HAPPY \n CLIENTS" },
        ].map((stat, index) => (
          <div key={index} className="text-5xl md:text-7xl font-bold leading-none">
            {stat.value}
            <br />
            <span className="text-sm font-medium mt-2 block text-coloPar">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
