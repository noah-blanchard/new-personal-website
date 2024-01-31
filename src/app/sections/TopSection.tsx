"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import AnimatedWord from "../components/AnimatedWord";

export default function TopSection() {
  // framer motion animations
  const hoverAnimation1 = {
    color: "rgba(255, 255, 255, 1)",
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimationControls();

  const handleMouseMove = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setMousePosition({
      x: event.clientX, // Centre de la div
      y: event.clientY,
    });

    await controls.start({
      opacity: 1,
      scale: 1.5,
      boxShadow: "0 0 15px 15px rgba(0, 255, 255, 0.2)",
      transition: { duration: 0 },
    });
    await controls.start({
      opacity: 0,
      scale: 1,
      transition: { duration: 0.5 },
    });
  };

  return (
    <main
      className="flex h-[800px] flex-col items-center justify-center mesh-bg"
      onMouseMove={handleMouseMove}
      id="home"
    >
      <div className="flex flex-row items-center w-4/5 justify-evenly">
        <div className="flex flex-col gap-7 text-7xl text-white tracking-wide w-1/3">
          <AnimatedWord>Noah</AnimatedWord>
          <AnimatedWord>Blanchard</AnimatedWord>
          <p className="text-xl tracking-normal text-zinc-600 font-extralight">
            Passionate Student Developer: Bridging Creativity and Technology to
            Shape Tomorrow.
          </p>
          <motion.a
            href="#about"
            whileHover={hoverAnimation1}
            className="cursor-pointer text-2xl font-medium text-zinc-400 py-14 flex justify-start"
          >
            Get to know me !
          </motion.a>
        </div>
      </div>
    </main>
  );
}