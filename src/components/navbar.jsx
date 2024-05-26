import React, { useEffect, useState } from "react";
import { links } from "../lib/data";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  return (
    <>
      <div className="sm:flex hidden flex-col items-end pt-[20px] pr-[20px] sticky top-[15px] z-[999]">
        {/* hamburger Responsive */}
        <div
          className="p-[3px] bg-white shadow-lg border-[1px] rounded-[5px]"
          onClick={() => setShowMenu(!ShowMenu)}
        >
          {ShowMenu ? (
            <AiOutlineClose className="text-[40px] text-[#6B7280]" />
          ) : (
            <RxHamburgerMenu className="text-[40px] text-[#6B7280]" />
          )}
        </div>
        {ShowMenu && (
          <div className="absolute shadow-lg top-[67px] w-[172px] h-[262px] bg-white border-[1px] rounded-[5px]">
            {links.map((item) => (
              <Link
                key={item.name}
                activeClass="active"
                to={item.name}
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                onClick={() => setActiveSection(item.name)}
                className="p-[12px] cursor-pointer text-center block sm:p-[10px] hover:text-gray-950 "
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sm:hidden flex sticky top-[15px] z-[999] max-w-[600px] mt-[20px] items-center justify-center gap-5 sm:gap-0 text-[0.9rem] font-medium text-gray-500 mx-auto rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
      >
        {links.map((item) => (
          <Link
            key={item.name}
            activeClass="active"
            to={item.name}
            spy={true}
            smooth={true}
            offset={item.ofset}
            duration={500}
            onClick={() => setActiveSection(item.name)}
            className="p-[12px] cursor-pointer sm:p-[10px] hover:text-gray-950 relative"
          >
            {item.name}

            {item.name === activeSection && (
              <motion.span
                className="bg-[#f3e8ff] rounded-full absolute inset-0 -z-10 "
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              ></motion.span>
            )}
          </Link>
        ))}
      </motion.div>
    </>
  );
};

export default Navbar;
