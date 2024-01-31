import { useAnimationControls, motion } from "framer-motion";

const AnimatedWord = ({ children }: { children: React.ReactNode }) => {
    // return (
    //   <div className="">
    //     {children.split("").map((char, index) => (
    //       <AnimatedLetter key={index}>{char}</AnimatedLetter>
    //     ))}
    //   </div>
    // );
    if (typeof children === "string") {
        return (
            <div className="">
                {children.split("").map((char, index) => (
                    <AnimatedLetter key={index}>{char}</AnimatedLetter>
                ))}
            </div>
        );
    } else {
        return (
            <div className="">
                <AnimatedLetter>{children}</AnimatedLetter>
            </div>
        );
    }
};

const AnimatedLetter = ({ children }: { children: React.ReactNode }) => {
    const controls = useAnimationControls();

    const handleClick = async () => {
        await controls.start({
            textShadow: "0 0 50px rgba(0, 255, 255, 1)",
            transition: { duration: 0 },
        });
        await controls.start({
            textShadow: "0 0 0px rgba(0, 255, 255, 0)",
            transition: { duration: 1.5 },
        });
    };

    return (
        <motion.span
            animate={controls}
            drag
            dragConstraints={{
                top: -20,
                left: -20,
                right: 20,
                bottom: 20,
            }}
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

export default AnimatedWord;