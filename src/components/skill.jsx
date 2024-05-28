import React from "react";
import { skillsData } from "../lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section
      name="Skills"
      className="mt-[120px] sm:mt-[50px] bg-gray-50   text-center max-w-[80%] mx-auto "
    >
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#1F2937] mb-10 text-center  font-medium text-4xl sm:text-3xl"
      >
        My skills
      </motion.h3>
      <ul className="flex flex-wrap justify-center gap-2  text-lg sm:text-base text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 sm:px-3 sm:py-2 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
