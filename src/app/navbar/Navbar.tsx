"use client"
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
export default function Navbar() {

    const [selected, setSelected] = useState(0);

    return (
        <nav className="nav-bg z-10 fixed w-screen flex justify-center items-center h-16">
            <ul className="flex gap-x-10">
                <NavbarItem href="#home" propagate={() => setSelected(0)} isSelected={selected === 0}>Home</NavbarItem>
                <NavbarItem href="#about" propagate={() => setSelected(1)} isSelected={selected === 1}>About</NavbarItem>
                <NavbarItem href="#projects" propagate={() => setSelected(2)} isSelected={selected === 2}>Projects</NavbarItem>
                <NavbarItem href="#contact" propagate={() => setSelected(3)} isSelected={selected === 3}>Contact</NavbarItem>
            </ul>
        </nav>
    )
}

function NavbarItem({ children, href, propagate, isSelected }) {

    const controls = useAnimationControls();
    const handleClick = async () => {
        propagate();
        await controls.start({
            textShadow: "0 0 50px rgba(0, 255, 255, 1)",
            transition: { duration: 0 }
        });
        await controls.start({
            textShadow: "0 0 0px rgba(0, 255, 255, 0)",
            transition: { duration: 1.5 }
        });
    }

    return (
        <li>
            <motion.a className={`font-semibold ${isSelected ? "text-white" : "text-zinc-400"}`} animate={controls} onClick={handleClick} href={href}>{children}</motion.a>
        </li>
    )
}