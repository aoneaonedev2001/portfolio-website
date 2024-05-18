'use client'
import React from "react";
import { experiencesData } from "../lib/data";
import { motion } from "framer-motion";
const Experience = () => {

  return (
    <section name="Experience" className="mb-28 sm:mb-[50px] mt-[200px] sm:mt-[100px]">
      <motion.h3
       initial={{opacity:0,y:100}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.5}}
       className="text-[#1F2937] mb-10 text-center  font-medium text-4xl sm:text-3xl">
        My experience
      </motion.h3>
      {experiencesData.map((item,index)=>(
      <div key={index} className="flex flex-row w-[80%] mx-auto sm:w-full sm:mx-[0%]  mb-[70px] sm:px-[40px]     sm:flex-col ">
        <motion.div
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
         className="w-[30%] sm:w-full">
          <p className=" flex  items-center text-sm mb-2 text-gray-400 ">{item.date} {item.icon} </p>
        </motion.div>
        <motion.div
         initial={{opacity:0,x:100}}
         whileInView={{opacity:1,x:0}}
         transition={{duration:1}}
         className="w-[70%] sm:w-full flex flex-col gap-y-3">
          <div className="flex text-xl sm:text-lg mb-2 text-[#1F2937] font-medium">
            <h3 className="font-semibold">{item.title}-{" "}</h3>
            <span className="text-pink-300 text-lg  ">{item.role}</span>
          </div>
          <p className="font-light text-base text-[#111827]">
           {item.description}
          </p>
          <ul className="flex flex-wrap  gap-2 sm:mt-auto">
            {item.tags.map((tag) => (
                <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-[5px] "
                key={tag} 
                >
                {tag}
                </li>
            ))}
            </ul>
          

        </motion.div>
      </div>
      ))}
    
  </section>
  );
};

export default Experience;
