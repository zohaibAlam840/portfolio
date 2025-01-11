import ToolCard from "../toolCard";
import one from "../../assets/1.avif";
import two from "../../assets/2.avif";
import three from "../../assets/3.png";
import four from "../../assets/4.png";
import five from "../../assets/5.png";
import six from "../../assets/6.png";
import seven from "../../assets/8.png";
import eight from "../../assets/9.png";
import ten from "../../assets/10.png";

export default function Detail() {
  return (
    <section className="px-5 py-10 md:p-14">
      {/* Title Section */}
      <h1 
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center md:text-left"
      >
        Tools<br />
        <span className="text-textCol">Technology</span>
      </h1>

      {/* Responsive Grid Layout */}
      <div 
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8"
      >
        <ToolCard title="Next.js" image={one} date="React Framework" link="https://nextjs.org/" />
        <ToolCard title="React Native" image={three} date="React Framework" link="https://reactnative.dev/" />
        <ToolCard title="Firebase" image={four} date="Realtime Database" link="https://firebase.google.com/" />
        <ToolCard title="ChatGPT" image={two} date="AI Assistant" link="https://chat.openai.com/" />
        <ToolCard title="FastAPI" image={five} date="Python API Framework" link="https://fastapi.tiangolo.com/" />
        <ToolCard title="PostgreSQL" image={six} date="RDBMS" link="https://www.postgresql.org/" />
        <ToolCard title="Adobe Illustrator" image={eight} date="Vector Design" link="https://www.adobe.com/products/illustrator.html" />
        <ToolCard title="Photoshop" image={seven} date="Raster Graphics Editor" link="https://www.adobe.com/products/photoshop.html" />
        <ToolCard title="GitHub" image={ten} date="Version Control" link="https://github.com/zohaibAlam840" />
      </div>
    </section>
  );
}
