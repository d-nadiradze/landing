"use client"

import React, {useState} from 'react';
import {navLink} from "@/shared/components";
import {AnimatePresence} from "framer-motion";
import {SubNavType} from "@/shared/types";
import {BurgerMenuSubnav} from "@/widgets/navigation";
import {customBlack, customGray} from "@/shared/enums";

type BurgerMenuNavigationListProps = {
    setIsBurgerMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export const BurgerMenuNavigationList: React.FC<BurgerMenuNavigationListProps> = ({setIsBurgerMenuOpen}) => {
    const [subNav, setSubNav] = useState<SubNavType[] | null>(null);
    const [activeSub, setActiveSub] = useState<number | null>(null)

    const toggleMenu = (subNav: SubNavType[], index: number) => {
        if (activeSub === index) {
            setSubNav(null)
            setActiveSub(null)
        } else {
            setSubNav(subNav)
            setActiveSub(index)
        }
    };

    return (
        <ul className="flex flex-col gap-y-7 pb-6">
            {
                navLink.map((item, index) =>
                    <li
                        onClick={() => toggleMenu(item.subNav, index)}
                        className={'relative cursor-pointer'}
                        key={index}>
                        <div className={'flex justify-between items-center'}>
                            <p
                                className={'hover:text-purple duration-300 caps-lock capitalize relative font-bold'}>
                                {item.text}
                            </p>

                            {/*<FilerArrowThinIcon width={20} height={20} color={activeSub === index ? customBlack : customGray} className={activeSub === index ? "rotate-180 duration-300" : "duration-300"} />*/}
                        </div>
                        <AnimatePresence>
                            {
                                ((activeSub === index && subNav)) &&
                                <BurgerMenuSubnav subNav={subNav} setIsBurgerMenuOpen={setIsBurgerMenuOpen}/>
                            }
                        </AnimatePresence>
                    </li>
                )
            }
        </ul>
    );
};