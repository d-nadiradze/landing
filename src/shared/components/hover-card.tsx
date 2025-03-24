import React from 'react';

type HoverCardProps = {
    active: boolean;
    text: string;
    name: string;
    icon: React.ReactNode;
}

export const HoverCard: React.FC<HoverCardProps> = ({active, text, name, icon}) => {
    return (
        <div
            className={`py-8 bg-black rounded-lg flex flex-col items-center justify-center ${active ? '' : 'opacity-50'} duration-300`}
        >
            <div
                className={'flex flex-col items-center justify-center gap-y-3'}
            >
                {icon}
                <p className={'text-white text-xl'}>{name}</p>
            </div>
            <p
                className={'text-white max-w-[222px] text-center pt-8'}
            >
                {text}
            </p>
        </div>
    );
};