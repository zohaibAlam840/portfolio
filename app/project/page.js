// 'use client'
// import Intro from "./../component/mainCard";
// import Resent from "../component/mian/resent";
// // import Nav from "../component/nav"
// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <div className="flex flex-col w-full h-full bg-bgColor text-white">
      
//       {/* Navbar */}
//       {/* <Nav /> */}

//       {/* Main Content */}
//       <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_2.5fr_1fr] gap-5 px-5 py-5">
        
//         {/* Left Column - Sticky Intro */}
//         <motion.div
//           className="w-full md:h-[100vh] py-5 md:py-14 md:pl-10"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="sticky top-5 z-10">
//             <Intro />
//           </div>
//         </motion.div>
//         <motion.div 
//         className="grid grid-cols-1 sm:grid-cols-1 gap-6 mt-8"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         viewport={{ once: true }}
//       >
//         {/* Middle Column */}
//           <Resent />
//           </motion.div>

//         {/* Right Column */}
//         <motion.div
//           className="w-full h-auto md:h-[100vh] border-2 border-black p-5"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="text-center md:text-left">
//             Column Three
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

'use client'
import { useEffect } from "react";
import Intro from "./../component/mainCard";
import Resent from "../component/main/resent";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let visitCount = Number(sessionStorage.getItem("homeVisitCount")) || 0;

      if (visitCount === 0) {
        sessionStorage.setItem("homeVisitCount", visitCount + 1);
        window.location.reload();
      }
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-bgColor text-white">
      
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_2.5fr_1fr] gap-5 px-5 py-5">
        
        {/* Left Column - Sticky Intro */}
        <motion.div
          className="w-full md:h-[100vh] py-5 md:py-14 md:pl-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="sticky top-5 z-10">
            <Intro />
          </div>
        </motion.div>

        {/* Middle Column */}
        <Resent />

        {/* Right Column */}
        <motion.div
          className="w-full h-auto md:h-[100vh] border-2 border-black p-5"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
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
