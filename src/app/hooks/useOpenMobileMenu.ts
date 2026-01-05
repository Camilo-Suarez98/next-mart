"use client"
import { useState } from "react";

export const useOpenMobileMenu = () => {
  const [openMobile, setOpenMobile] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMobile(!openMobile);
  };

  return {
    openMobile,
    toggleMobileMenu
  }
}