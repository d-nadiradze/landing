import React, {ReactNode} from 'react';

type BoxValueType = {
    children?: ReactNode,
    canCopy?: boolean,
    dataToCopy?: string | number
    className?: string
}

export const GridValue: React.FC<BoxValueType> = ({children, canCopy, dataToCopy, className}) => {
    return (
        <div
            className={`sm:border-l border-custom-gray-border sm:px-4 md:py-5 py-2 col-span-3 md:text-base text-sm ${className}`}>
            {children}
        </div>
    );
};
