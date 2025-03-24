import React from 'react';

export const TopUpIcon = (props:{color: string, className?: string, width?:string, height?: string}) => {
    return (
        <svg className={'flex-shrink-0'} xmlns="http://www.w3.org/2000/svg" width={props.width ? props.width : "20"} height={props.height ? props.height : "20"} viewBox="0 0 20 20" fill="none">
            <path className={`${ props.className } group-hover:stroke-purple`} d="M10 4V16M16 10L4 10" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};