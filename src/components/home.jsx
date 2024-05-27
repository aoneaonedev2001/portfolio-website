import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import Heroimg from "../assets/hero.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  const Container = (delay) => ({
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <section name="Home" className="h-[70vh] sm:h-full sm:mt-[50px] mt-[200px]">
      <div className="flex flex-row sm:justify-center items-center sm:flex-col-reverse h-[500px] sm:h-[630px]">
        <div className="w-[600px] sm:w-[100%]  flex flex-col justify-center sm:items-center gap-y-[25px]">
          <motion.h1
            variants={Container(0)}
            initial={"hidden"}
            animate={"visible"}
            className="font-medium sm:mt-[19px] md:text-5xl text-7xl sm:text-[47px] text-[#1F2937]"
          >
            Aone Obomo
          </motion.h1>
          <motion.h3
            variants={Container(0.5)}
            initial={"hidden"}
            animate={"visible"}
            className="font-medium text-3xl sm:text-xl text-[#f0abfc]"
          >
            Full Stack Developer
          </motion.h3>
          <motion.div
            variants={Container(1)}
            initial={"hidden"}
            animate={"visible"}
            className="font-light  sm:text-center text-base text-[#111827] sm:text-sm md:text-sm"
          >
            <p>
              I am a passionate and skilled web developer specializing in
              creating
            </p>
            <p>
              efficient and user-friendly web applications. With over 2 years of
            </p>
            <p>
              experience, I have honed my expertise in various technologies such
            </p>
            <p>as React, Next.js, Node.js, MySQL, and MongoDB.</p>
          </motion.div>
          <motion.div
            variants={Container(1.5)}
            initial={"hidden"}
            animate={"visible"}
            className="flex gap-4 sm:gap-2 mt-[30px] sm:mt-[20px] sm:text-[12px] md:text-[13px]"
          >
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-200}
              duration={1000}
              className="group bg-gray-900 text-white px-7 md:px-4 md:py-2 sm:px-3 sm:py-2 py-3 flex items-center gap-2 rounded-[5px] outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="group bg-white sm:px-3 sm:py-2 px-7 py-3 md:px-4 md:py-2 flex items-center gap-2 rounded-[5px] outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/CV.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
              href="https://www.linkedin.com/in/aonedev2001/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
              href="https://github.com/aoneaonedev2001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>

        <motion.img
          src={Heroimg}
          alt="hero Aone"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="w-[424px]  h-[495px] sm:w-[276px] sm:h-[339px]  md:h-[400px] mb-[135px] md:mb-[93px] sm:mb-[10px]"
        />
      </div>
    </section>
  );
};

export default Home;
