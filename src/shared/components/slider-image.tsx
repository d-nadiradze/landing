import React from 'react';
import Image from "next/image";

type SliderImageProps = {
    active?: boolean;
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

export const SliderImage: React.FC<SliderImageProps> = ({active, src, alt, width, height, className}) => {
    return (
        <div className={`duration-500 relative rounded-[12px] ${active ? '' : 'opacity-50'} relative`}>
            <Image
                src={src}
                className={`border border-border-primary rounded-t-[20px] max-w-[302px] h-auto flex-wrap-0 w-full ${className}`}
                alt={alt}
                width={width}
                height={height}
                quality={60}
            />
            <div className="absolute bottom-0 w-full z-50 h-[70px] bg-gradient-to-b from-transparent to-white"/>
        </div>
    );
};