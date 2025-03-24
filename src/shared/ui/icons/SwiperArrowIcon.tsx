import React from 'react';

export const SwiperArrowIcon = (props:{color: string, className?: string, width?:string, height?: string}) => {
    return (
        <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width={props.width ? props.width : "20"} height={props.height ? props.height : "20"} viewBox="0 0 20 20" fill="none">
            <path d="M8.33398 5.83325L11.6673 9.99992L8.33398 14.1666" stroke={props.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};
