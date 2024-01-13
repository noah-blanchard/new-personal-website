"use client";
import Image from 'next/image'
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

export default function TopSection() {

    // framer motion animations
    const hoverAnimation1 = {
        scale: 1.05,
        rotate: 5,
        transition: { type: "spring", stiffness: 300 }
    };

    const hoverAnimation2 = {
        scale: 1.05,
        rotate: -5,
        transition: { type: "spring", stiffness: 300 }
    };

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const controls = useAnimationControls();

    const handleMouseMove = async (event) => {
        setMousePosition({
            x: event.clientX, // Centre de la div
            y: event.clientY
        });

        await controls.start({
            opacity: 1,
            scale: 1.5,
            boxShadow: "0 0 15px 15px rgba(0, 255, 255, 0.2)",
            transition: { duration: 0 }
        });
        await controls.start({
            opacity: 0,
            scale: 1,
            transition: { duration: 0.5 }
        });
    };



    return (
        <main className="flex h-[800px] flex-col items-center justify-center mesh-bg" onMouseMove={handleMouseMove} id="landing">
            <div className="flex flex-row items-center w-4/5 justify-evenly">
                <div className='flex flex-col gap-7 text-7xl tracking-wide w-1/3'>
                    <AnimatedWord>Noah</AnimatedWord>
                    <AnimatedWord>Blanchard</AnimatedWord>
                    <p className='text-xl tracking-normal text-zinc-600 font-extralight'>
                        Passionate Student Developer: Bridging Creativity and Technology to Shape Tomorrow.
                    </p>

                </div>
            </div>

            <motion.div
                animate={controls}
                style={{
                    position: 'fixed',
                    top: mousePosition.y,
                    left: mousePosition.x,
                    width: '1px',
                    height: '1px',
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    pointerEvents: 'none',
                    zIndex: 1000
                }}
            />

        </main >
    )
}

const AnimatedWord = ({ children }) => {
    return (
        <div className="">
            {children.split("").map((char, index) => (
                <AnimatedLetter key={index}>{char}</AnimatedLetter>
            ))}
        </div>
    )
}

const AnimatedLetter = ({ children }) => {
    const controls = useAnimationControls();

    const handleClick = async () => {
        await controls.start({
            textShadow: "0 0 50px rgba(0, 255, 255, 1)",
            transition: { duration: 0 }
        });
        await controls.start({
            textShadow: "0 0 0px rgba(0, 255, 255, 1)",
            transition: { duration: 1.5 }
        });
    };

    return (
        <motion.span
            animate={controls}
            whileHover={{
                scale: 1.2,
            }}
            transition={{ type: "tween", stiffness: 300 }}
            className="inline-block cursor-pointer"
            onHoverStart={handleClick}
        >
            {children}
        </motion.span>
    );
};