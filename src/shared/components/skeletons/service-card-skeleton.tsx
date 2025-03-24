import React from 'react';

export const ServiceCardSkeleton: React.FC = () => {
    return (
        <div
            className="cursor-pointer border border-custom-gray-border rounded-[10px] flex flex-col flex-1 p-5 h-[156px] animate-pulse">
            <div className="flex items-center justify-center h-1/2">
                <div className="rounded-md bg-slate-200 w-[52px] h-[52px] md:w-[52px] md:h-[52px]"></div>
            </div>
            <div className="h-1/2 flex items-end justify-center">
                <div className="bg-slate-200 rounded w-3/4 h-4"></div>
            </div>
        </div>
    );
};
