import React from 'react';
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";

type FeaturesSliderCardProps = {
    active?: boolean;
    image: string,
    location: string,
    date: string,
    amount: string,
}
export const FeaturesSliderCard: React.FC<FeaturesSliderCardProps> = ({active, image, amount, date, location}) => {
    return (
        <div className={`duration-500 relative ${active ? '' : 'opacity-50'} `}>
           <Image src={`/images/slider/${image}`} priority={true} className={'mx-auto !w-[90%] rounded-xl'} alt={'slider-1'} width={300} height={410}/>
            <AnimatePresence mode={'wait'}>
                {
                    active &&
                    <motion.div
                        initial={{opacity: 0, y: 100}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: 100}}
                        transition={{duration: 0.5}}
                        className="absolute -left-1.5 md:-left-6 z-10 bottom-5 bg-white border border-border-primary rounded-2xl p-4 flex items-center w-[302px] md:w-[380px] max-h-[82px]">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                                <div className={'rounded-[8px] w-[42px] h-[42px] flex items-center justify-center bg-custom-gray-bg'}>
                                    {/*<ArrowIcon className={'rotate-[130deg]'} width={22} height={22}/>*/}
                                </div>
                                <div className="ml-2">
                                    <p className={'text-sm text-left font-bold'}>{location}</p>
                                    <p className={'text-custom-gray-text text-xs mt-1'}>{date}</p>
                                </div>
                            </div>

                            <p className={'font-bold text-[16px]'}>{amount}</p>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
};