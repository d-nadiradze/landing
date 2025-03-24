import React from 'react';

type RowHeadingProps = {
    children: React.ReactNode;
    className?: string;
}

export const RowHeading: React.FC<RowHeadingProps> = ({children, className}) => {
    return (
        <div className={`text-black border-b border-custom-gray-border-primary md:py-6 py-4 md:px-0 px-6 text-nowrap ${className}`}>
            {children}
        </div>
    );
};