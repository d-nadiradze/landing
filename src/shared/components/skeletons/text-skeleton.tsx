// import { motion } from 'framer-motion';
import React from 'react';

type TextSkeletonProps = {
    className: string
}

export const TextSkeleton: React.FC<TextSkeletonProps> = ({className}) => {
    return (
        <div
            key={'textSkeleton'}
            className={`${className} bg-slate-200 rounded-xl animate-pulse`}
        />
    );
};