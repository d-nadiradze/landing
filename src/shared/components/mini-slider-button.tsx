import React, { Dispatch, SetStateAction } from 'react';

type MiniSliderButtonProps = {
    children: React.ReactNode;
    active: boolean;
    onClick: Dispatch<SetStateAction<string>>;
}

export const MiniSliderButton: React.FC<MiniSliderButtonProps> = ({ children, active, onClick }) => {
    const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
        onClick(String(children));
    };

    return (
        <div
            onClick={handleClick}
            className={`${active ? 'text-black bg-white' : 'text-white bg-white/30 backdrop-blur-xl'} px-4 py-2 rounded-full cursor-pointer transition duration-300`}
        >
            <p>
                {children}
            </p>
        </div>
    );
};
