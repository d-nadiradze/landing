"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type SliderCardProps = {
    active?: boolean;
    title?: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    isImageBottom: boolean;
    light?: boolean;
    iconSrc?: string;
    iconAlt?: string;
};

export const SliderCard: React.FC<SliderCardProps> = ({active, title, description, imageSrc, imageAlt, imageWidth, imageHeight, isImageBottom, light, iconAlt, iconSrc }) => {
    return (
        <div className={`mt-[60px] ${light ? 'bg-purple-secondary border border-custom-gray-border text-purple' : 'bg-black text-white'} rounded-xl p-10 relative h-[500px] overflow-hidden ${active ? '' : 'opacity-50'} duration-500`}>
            <div className={`relative z-10 ${isImageBottom ? '' : 'mt-80'} flex flex-col items-center`}>
                {
                    title && <p className="font-bold text-base">{title}</p>
                }
                {
                    iconSrc && <Image src={iconSrc} alt={iconAlt as string} width={24} height={24} className={'!w-6 !h-6'}/>
                }
                <p className="mt-4 text-sm">{description}</p>
            </div>
            <motion.div
                className={`absolute ${isImageBottom ? '-bottom-8' : 'top-0'} left-0 right-0`}
                initial={{ opacity: 0, y: isImageBottom ? 50 : -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <Image
                    className="flex-shrink-0 w-full h-auto"
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                />
            </motion.div>
        </div>
    );
};
