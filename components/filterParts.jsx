
import React, { useState } from "react";
import Image from "next/image"; // Import the Image component from Next.js

// Import SVG files
import CpuIconSvg from "../assets/CPU icon.svg";
import GpuSvg from "../assets/GPU.svg";
import PsuSvg from "../assets/PSU.svg";
import MotherboardSvg from "../assets/Motherboard.svg";
import MemoryIconSvg from "../assets/Ram Memory Icon.svg";
import StorageIconSvg from "../assets/Phone SIM Payment.svg";
import CasesIconSvg from "../assets/PC Vectors.svg";
import CoolersIconSvg from "../assets/fan-component-svgrepo-com.svg";
import AccessoriesIconSvg from "../assets/Mouse icon.svg";

export default function FilterParts() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionToggle = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((selected) => selected !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const allOptions = [
    { name: "CPU", image: CpuIconSvg },
    { name: "GPU", image: GpuSvg },
    { name: "PSU", image: PsuSvg },
    { name: "Motherboard", image: MotherboardSvg },
    { name: "Memory", image: MemoryIconSvg },
    { name: "Storage", image: StorageIconSvg },
    { name: "Cases", image: CasesIconSvg },
    { name: "Coolers", image: CoolersIconSvg },
    { name: "Accessories", image: AccessoriesIconSvg },
  ];

  return (
    <div>
      {/* Display SVG images above the buttons */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {allOptions.map((option) => (
          <div
            key={option.name}
            style={{ textAlign: "center", cursor: "pointer" }}
            onClick={() => handleOptionToggle(option.name)}
          >
            <Image src={option.image} alt={option.name} width={50} height={50} />
            <br />
            <button
              style={{
                backgroundColor: selectedOptions.includes(option.name) ? "#548CA8" : "transparent",
                color: selectedOptions.includes(option.name) ? "white" : "#548CA8",
                border: "none", // Explicitly set border to none
              }}
              onClick={() => handleOptionToggle(option.name)}
            >
              {option.name}
            </button>
          </div>
        ))}
      </div>

      {/* You can use the selectedOptions state in your filtering logic */}
      <div>Selected Options: {selectedOptions.join(", ")}</div>
    </div>
  );
}
