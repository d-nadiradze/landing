"use client"

import { motion } from 'framer-motion';
import React from 'react';
import {textFade} from "@/shared/animations";

type SubHeaderProps = {
    children: string;
    className?: string;
    animate?: boolean;
}
export const SubHeader:React.FC<SubHeaderProps> = ({children,className, animate = true}) => {
    return (
        <>
            {
                animate ? (
                        <motion.h3
                            variants={textFade}
                            key={Math.floor(Math.random() * 999)}
                            initial={'initial'}
                            whileInView={'animate'}
                            viewport={{once: true, margin: '-50px'}}
                            className={`${className} text-center text-base md:text-[20px] leading-[24px] font-normal mb-6`}>{children}</motion.h3>
                    )
                    :
                    <h3 className={`${className} text-center text-base md:text-[20px] leading-[24px] font-normal mb-6`}>{children}</h3>
            }
        </>
    );
};