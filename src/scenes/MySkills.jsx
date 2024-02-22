import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-24">
        <motion.div
          className="md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            TECH <span className="text-red"> STACK</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            A dedicated frontend developer with a willingness to learn and
            passion for frontend technologies. I strive to write clean and
            readable code. Curious, proactive, and ready to learn new challenges
            and technologies to grow and develop myself.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-6">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className=" flex flex-col items-center">
            <img alt="github-link" src="../assets/html.png" className="w-14" />
            <p className="font-playfair font-semibold text-3xl mt-5 ">HTML</p>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className=" flex flex-col items-center">
            <img alt="github-link" src="../assets/css.png" className="w-14" />
            <p className="font-playfair font-semibold text-3xl mt-5 ">CSS</p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className=" flex flex-col items-center">
            <img alt="github-link" src="../assets/scss.png" className="w-14" />
            <p className="font-playfair font-semibold text-3xl mt-5 ">SASS</p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className=" flex flex-col items-center">
            <img
              alt="github-link"
              src="../assets/javascript.png"
              className="w-14"
            />
            <p className="font-playfair font-semibold text-3xl mt-5 ">
              JAVASCRIPT
            </p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className=" flex flex-col items-center">
            <img alt="github-link" src="../assets/react.png" className="w-14" />
            <p className="font-playfair font-semibold text-3xl mt-5 ">REACT</p>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className=" flex flex-col items-center">
            <img
              alt="github-link"
              src="../assets/typescript.png"
              className="w-14"
            />
            <p className="font-playfair font-semibold text-3xl mt-5 ">
              TYPESCRIPT
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
