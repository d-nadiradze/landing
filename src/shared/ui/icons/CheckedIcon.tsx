
import React from 'react';

type CheckedIconProps = {
    color?: string
    size?: number
}

export const CheckedIcon: React.FC<CheckedIconProps> = ({color, size}) => {
    return (
        <svg width={size ?? 18} height={size ?? 18} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7.99984L6.82843 10.8283L12.4847 5.17139" stroke={color ?? 'black'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
};
