import { useRef } from "react";
import { projectsData } from "../lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";

const Projects = () => {
  return (
    <section name="Projects" className="mt-[200px]  sm:mt-[80px]">
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#1F2937] text-center font-medium text-4xl sm:text-3xl"
      >
        My Projects
      </motion.h3>
      {projectsData.map((item, index) => (
        <ProjectCard
          key={index}
          title={item.title}
          description={item.description}
          tags={item.tags}
          imageUrl1={item.imageUrl1}
          UrlDemo={item.UrlDemo}
          UrlGithub={item.UrlGithub}
        />
      ))}
    </section>
  );
};

// Component Card
const ProjectCard = ({ title, description, tags, imageUrl1,UrlDemo,UrlGithub }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="flex flex-row w-[680px]  sm:w-[400px]  border border-black/5 mx-auto  bg-white rounded-[20px] my-[50px]"
    >
      <div className="w-[50%] flex flex-col justify-between  p-[27px] md:p-[30px] sm:p-[10px]">
        <h3 className="text-2xl sm:text-lg font-semibold">{title}</h3>
        <p className="mt-3 md:mb-[0px] sm:mt-1 sm:text-[11px] sm:mb-[5px] mb-[20px] leading-relaxed text-gray-700 ">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 sm:mt-1 gap-2 sm:gap-1 md:gap-1">
          {tags.map((tag, index) => (
            <li
              className="sm:hidden bg-black/[0.7] px-3 py-1 text-[0.7rem] sm:text-[0.5rem] uppercase tracking-wider text-white rounded-full "
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="lg:mt-[20px] mt-[10px] text-[1rem] md:text-[13px] sm:text-[11px] flex">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="cursor-pointer px-3 sm:px-1 md:px-2 sm:mr-[10px] py-1 mr-[20px] rounded-[5px] bg-[#fbe2e3]"
            href={UrlDemo}
            target="_blank"
          >
            See Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="cursor-pointer px-3 sm:px-1 md:px-2 py-1 rounded-[5px] border-[1px] bg-white text-gray-700 hover:text-gray-950 flex items-center gap-2 borderBlack"
            href={UrlGithub}
            target="_blank"
          >
            See Code <FaGithubSquare />
          </motion.a>
        </div>
      </div>
        <motion.img
          src={imageUrl1}
          alt="all project"
          className="cover w-1/2 h-[100%] sm:w-[230px] sm:h-[250px]  rounded-2xl border border-black/5"
        />
    </motion.div>
  );
};

export default Projects;
