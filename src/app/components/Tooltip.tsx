import React, { ReactNode, FC } from 'react';

interface TooltipProps {
    children: ReactNode;
    text: string;
    isVisible: boolean; // Ajout de la prop pour contrôler la visibilité
}

const Tooltip: FC<TooltipProps> = ({ children, text, isVisible }) => {
    const tooltipStyle = isVisible ? 'block' : 'hidden';

    return (
        <div className="relative flex items-center justify-center">
            {children}
            <div
                className={`absolute bottom-full mb-2 px-3 py-1 bg-white text-black border border-gray-200 rounded shadow-lg z-10 ${tooltipStyle}`}
            >
                {text}
            </div>
        </div>
    );
};

export default Tooltip;
