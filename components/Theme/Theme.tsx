"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiComputerDesktop } from "react-icons/hi2";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import ThemeDropDown from "./ThemeDropDown";

const Theme = () => {
  const [drop, setDrop] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div onClick={() => setDrop(!drop)} className="cursor-pointer">
      {theme === "dark" && <MdDarkMode className="h-6 w-6" />}
      {theme === "light" && <MdLightMode className="h-6 w-6" />}
      {theme === "system" && <HiComputerDesktop className="h-6 w-6" />}
      {/* dropdown */}
      {drop && <ThemeDropDown />}
    </div>
  );
};

export default Theme;
