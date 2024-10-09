import React, { useState } from "react";
import { motion } from "framer-motion";

interface DropdownProps {
  options: { label: string; action: () => void }[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdown} className="dropdown-toggle navBtn">
        ☰
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="dropdown-content nav"
      >
        {options.map((option, index) => (
          <a key={index} onClick={option.action} className="navItem">
            {option.label}
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Dropdown;
