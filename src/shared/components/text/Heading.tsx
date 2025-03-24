"use client"
import { motion } from 'framer-motion';
import React from 'react';
import {textFade} from "@/shared/animations";

type HeadingProps = {
    children: string;
    className?: string;
    animate?: boolean;
};
export const Heading:React.FC<HeadingProps> = ({children, className,animate = true}) => {
    return (
        <>
            {
                animate ? (
                        <motion.h2
                            variants={textFade}
                            key={Math.floor(Math.random() * 999)}
                            initial={'initial'}
                            whileInView={'animate'}
                            viewport={{once: true, margin: '-50px'}}
                            className={`${className} text-center text-[32px] md:text-[44px] leading-[38.4px] md:leading-[52.8px] font-bold mb-6`}>{children}</motion.h2>
                    )
                    :
                    <h2 className={`${className} text-center text-[32px] md:text-[44px] leading-[38.4px] md:leading-[52.8px] font-bold mb-6`}>{children}</h2>
            }
        </>

    );
};