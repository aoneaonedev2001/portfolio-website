import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div
      name="Contact"
      className="text-center font-medium text-xl text-gray-700 mb-[100px] sm:mb-[50px]"
    >
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#1F2937] mb-10 text-center sm:text-3xl  font-medium text-4xl"
      >
        Contact
      </motion.h3>
      <h3 className="mb-[20px]">aonedev2001@gmail.com</h3>
      <h3 className="mb-[20px]">0648525471</h3>
      <h3 className="mb-[20px]">Bangkok Thailand</h3>
    </div>
  );
};

export default Contact;
