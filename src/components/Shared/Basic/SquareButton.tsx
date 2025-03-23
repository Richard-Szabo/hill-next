"use client";
import { BiLoaderAlt } from "react-icons/bi";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface SquareButtonProps extends HTMLMotionProps<"button"> {
  label: string;
  className?: string;
  borderColor?: string;
  borderHighlightColor?: string;
  textColor?: string;
  textHighlightColor?: string;
  bgColor?: string;
  bgHighlightColor?: string;
  borderSize?: "xs" | "sm" | "md";
  isLoading?: boolean;
}

const theme = {
  border: {
    xs: {
      top: "border-t-[1px] border-l-[1px]",
      bottom: "border-b-[1px] border-r-[1px]",
    },
    sm: {
      top: "border-t-[2px] border-l-[2px]",
      bottom: "border-b-[2px] border-r-[2px]",
    },
    md: {
      top: "border-t-[4px] border-l-[4px]",
      bottom: "border-b-[4px] border-r-[4px]",
    },
  },
  button: {
    xs: "p-[1px]",
    sm: "p-[2px]",
    md: "p-[4px]",
  },
};

const SquareButton = forwardRef<HTMLButtonElement, SquareButtonProps>(
  (
    {
      label,
      className = "min-w-60 h-14",
      borderSize = "sm",
      borderColor = "border-white",
      textColor = "text-white",
      bgColor = "bg-transparent",
      borderHighlightColor = "group-hover:border-hill-primary",
      textHighlightColor = "group-hover:text-white",
      bgHighlightColor = "group-hover:bg-transparent",
      isLoading=false,
      ...props
    },
    ref
  ) => {

    return (
      <motion.button
        ref={ref}
        className={`relative group overflow-hidden ${className} ${theme.button[borderSize]}`}
        whileTap={{ scale: 0.85, transition: { duration: 0.6 } }}
        disabled={isLoading}
        {...props}
      >
        {/* Top Border */}
        <div
          className={`absolute top-0 left-0 w-2/3 h-1/2 ${theme.border[borderSize].top} ${borderColor} ${borderHighlightColor} transition-all duration-500 group-hover:w-full group-hover:h-full`}
        />

        {/* Bottom Border */}
        <div
          className={`absolute bottom-0 right-0 w-2/3 h-1/2 ${theme.border[borderSize].bottom} ${borderColor} ${borderHighlightColor} transition-all duration-500 group-hover:w-full group-hover:h-full`}
        />

        {/* Button Content */}
        <div
          className={`h-full w-full flex items-center justify-center px-8 ${textColor} ${bgColor} ${bgHighlightColor} ${textHighlightColor} transition duration-600 ease-in-out`}
        >
          {isLoading ? <div className="animate-spin"><BiLoaderAlt  size={20}  /></div> : label}
        </div>
      </motion.button>
    );
  }
);

SquareButton.displayName = "SquareButton"; // Fix Next.js warning

export default SquareButton;
