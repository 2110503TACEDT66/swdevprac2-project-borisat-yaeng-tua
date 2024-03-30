"use client";

import { CustomButtonProps } from "@/interfaces";
import Image from "next/image";
import { title } from "process";

export default function CustomButton({
  title,
  handleClick,
  containerStyles,
  btnType

 
}: CustomButtonProps) {
  return (
    
    <button
      
      type={btnType || "submit"}
      className={containerStyles}
      onClick={handleClick}
    >
     {title}
    </button>
  );
}