import React, {ReactNode} from 'react';

type BoxType = {
    children?: ReactNode;
    className?: string
}

export const Grid: React.FC<BoxType> = ({children, className}) => {
    return (
        <div
            className={`last:border-0 border-b border-custom-gray-border w-full grid grid-cols-3 sm:grid-cols-5 items-center ${className ? className : ''}`}>
            {children}
        </div>
    );
};
