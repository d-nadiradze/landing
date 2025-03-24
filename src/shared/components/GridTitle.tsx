import React, {ReactNode} from 'react';

type BoxSlotType = {
    children?: ReactNode
    className?: string
}

export const GridTitle: React.FC<BoxSlotType> = ({children, className}) => {
    return (
        <p className={`text-custom-gray-text font-[400] md:pt-4 sm:py-5 col-span-2 md:text-sm text-xs ${className}`}>
            {children}
        </p>
    );
};