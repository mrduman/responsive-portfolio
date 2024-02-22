import React from "react";
import comfyStore from "../assets/comfyStore.jpg";
import fitnessApp from "../assets/fitness.png";
import snapgram from "../assets/snapgram.png";
import youtube from "../assets/youtube.png";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

function Projects() {
  const portfolios = [
    {
      id: 1,
      src: comfyStore,
      demoLink: "https://comfy-store-appl.netlify.app/",
      codeLink: "https://github.com/mrduman/e-commerce-store",
    },
    {
      src: snapgram,
      id: 2,
      demoLink: "http://snapgram-two-mauve.vercel.app/ ",
      codeLink: "https://github.com/mrduman/Snapgram",
    },
    {
      id: 3,
      src: fitnessApp,
      demoLink: "https://fittness-app.netlify.app/",
      codeLink: "https://github.com/mrduman/gymApp",
    },
    {
      id: 4,
      src: youtube,
      demoLink: "https://main--youtube-clone-app-mui.netlify.app/",
      codeLink: "https://github.com/mrduman/youtube-clone-mui",
    },
  ];

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const handleCodeClick = (codeLink) => {
    window.open(codeLink, "_blank");
  };

  return (
    <motion.div
      id="projects"
      name="portfolio"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="bg-gradient-to-blue to-gray-800 w-full text-white md:h-fit  pt-40 pb-40"
    >
      <div className="md:w-2/7 mx-auto text-center">
        <p className="font-playfair font-semibold text-4xl">
          <span className="text-red">PRO</span>JECTS
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-2/3" />
        </div>
      </div>
      <p className="mt-10 mb-10 text-center">Visit my projects</p>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 items-center justify-center">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="comfy store"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleDemoClick(demoLink)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleCodeClick(codeLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
