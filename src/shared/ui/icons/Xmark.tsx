import React from 'react';

export const Xmark = (props:{color?: string, className?: string, width?:string | number, height?: string | number}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width ? props.width : "14"} height={props.height ? props.height : "14"} viewBox="0 0 12 12" fill="none" className={'close-arrow'}>
            <g clipPath="url(#clip0_3271_24718)">
                <path d="M9.5 2.5L2.5 9.5" stroke={props.color ?? 'black'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5 2.5L9.5 9.5" stroke={props.color ?? 'black'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_3271_24718">
                    <rect width="12" height="12" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
};
