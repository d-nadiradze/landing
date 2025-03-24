import React from 'react';

type HistoryCardProps = {
    year: string;
    text: string;
}

export const HistoryCard: React.FC<HistoryCardProps> = ({year, text}) => {
    return (
        <div className={'py-6 grow flex flex-col items-center justify-start text-center text-white'}>
            <p className={'font-extrabold pb-5'}>{year}</p>
            <p>{text}</p>
        </div>
    );
};