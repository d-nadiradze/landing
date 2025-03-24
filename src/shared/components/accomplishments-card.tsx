import React from 'react';

type AccomplishmentsCardProps = {
    title: string;
    description: string;
}

export const AccomplishmentsCard: React.FC<AccomplishmentsCardProps> = ({title, description}) => {
    return (
        <div className={'w-full bg-purple-secondary border-custom-gray-border md:px-6 px-4 md:py-12 py-10 rounded-[10px] flex flex-col items-center justify-center'}>
            <h3 className={'md:text-[28px] text-[24px] font-extrabold text-purple'}>
                {title}
            </h3>
            <p className={'text-center'}>
                {description}
            </p>
        </div>
    );
};