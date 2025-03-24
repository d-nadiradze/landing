import React from 'react';
import {SubNavType} from "@/shared/types";
import Link from "next/link";
import { motion } from 'framer-motion';

type BurgerMenuSubNavProps = {
    subNav: SubNavType[] | null,
    setIsBurgerMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export const BurgerMenuSubnav: React.FC<BurgerMenuSubNavProps> = ({subNav, setIsBurgerMenuOpen}) => {

    const handleOnClick = () => {
        if (setIsBurgerMenuOpen) {
            setIsBurgerMenuOpen(false);
        }
    }

    return (
        <motion.div
            className={'mt-5 px-4 flex flex-col gap-y-5 border-l border-custom-gray-border'}
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0, transition: {ease: "easeInOut", duration: 0.3}}}
            exit={{opacity: 0,}}
        >
            {
                subNav?.map((link, index) => (
                    <Link
                        onClick={handleOnClick}
                        href={link.url}
                        className={'hover:text-purple duration-300'}
                        key={index}>
                        {link.text}
                    </Link>
                ))
            }
        </motion.div>
    );
};