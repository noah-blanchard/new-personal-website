import React, { useState } from 'react';
import Tooltip from './Tooltip';

export default function SkillDisplay({
    icon,
    title
}: {
    icon: React.ReactNode,
    title: string
}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        console.log("enter")
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="w-14 cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Tooltip isVisible={isHovered} text={title} >{icon}</Tooltip>
        </div>
    );
}
