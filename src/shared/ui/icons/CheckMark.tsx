import React from 'react';

export const CheckMark = (props:{color: string, className?: string, width?:string, height?: string,backgroundColor?: string}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width ? props.width : "12"} height={props.height ? props.height : "13"} viewBox="0 0 12 13" fill={props.backgroundColor ?? 'none'}>
            <path d="M2.5 6.50001L4.8335 9L9.5 4" stroke={props.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};
