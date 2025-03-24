"use client"

import React, {useState} from 'react';
import SubNav from "@/shared/components/navigation/SubNav";
import {AnimatePresence, motion} from "framer-motion";
import {SubNavType} from "@/shared/types";
import {navLink} from "@/shared/components";
import Link from "next/link";
import {Menu, X} from "lucide-react";
import {BurgerMenuNavigation} from "@/widgets/navigation";
import {useOutsideClickHandler} from "@/shared/hooks";
import {useTranslations} from "next-intl";
import {LanguageSelect} from "@/features/change-language/ui";
import {useLocale} from "use-intl";
import {Button} from "@/shared/components/Button";
import Image from "next/image";


export const Navbar = () => {
    const t = useTranslations('nav')
    const locale = useLocale();
    const [active, setActive] = useState<boolean>(false)
    const [showBanner, setShowBanner] = useState<boolean>(false);
    const [subNav, setSubNav] = useState<SubNavType[] | null>(null);
    const [activeSub, setActiveSub] = useState<number | null>(null)

    const handleOutsideClick = () => {
        if (active) setActive(false)
    }

    const wrapperRef = useOutsideClickHandler(handleOutsideClick)

    const toggleMenu = (subNav: SubNavType[], index: number) => {
        setSubNav(subNav)
        setActiveSub(index)
    };

    const toggleBurgerMenu = () => {
        setActive(prevState => !prevState)
    }


    return (
        <nav className={'fixed top-0 left-0 right-0 z-[999]'}>
            {showBanner && (
                <div
                    className="flex items-center justify-center bg-purple text-white text-sm py-2 relative w-full px-4 overflow-hidden">
                    <span
                        className="inline-block md:whitespace-nowrap w-[256px] md:w-full md:animate-scroll-text text-center md:text-left">
                      Get a <span className="font-bold">50% discount</span> on the premium bundle by signing up now.
                    </span>
                    <button onClick={() => setShowBanner(false)}
                            className="px-4 py-2 md:px-10 z-10 bg-purple absolute right-0 text-white ml-4">
                        {/*<XBorderlessIcon/>*/}
                    </button>
                </div>
            )}


            <div className="bg-white border-b border-border-primary left-0 right-0 relative">
                <div className="container !px-4 !py-4 flex justify-between items-center md:h-[75px] h-auto">
                    <Link href={'/'} className="flex items-center space-x-2">
                        <Image src={'/images/icons/emoney.svg'} width={126} height={20} alt={'Emoney'} />
                    </Link>
                    <ul className="md:flex hidden items-center space-x-8">
                        {
                            navLink.map((item, index) =>
                                <li
                                    onMouseEnter={() => toggleMenu(item.subNav, index)}
                                    className={'relative cursor-pointer'}
                                    key={index}>
                                    <p
                                        className={'hover:text-purple duration-300 caps-lock relative'}>
                                        {t(item.text)}
                                    </p>
                                    <AnimatePresence>
                                        {
                                            ((activeSub === index && subNav)) &&
                                            <SubNav subNav={subNav} setSubNav={setSubNav}/>}
                                    </AnimatePresence>
                                </li>
                            )
                        }
                    </ul>
                    <div className="md:flex hidden items-center space-x-4">
                        <Link href={process.env.NEXT_PUBLIC_AUTH_URL + `/${locale}/signin`}
                              className="text-gray-700 hover:text-purple">
                            {t('signIn')}
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_AUTH_URL + `/${locale}/signup`}>
                            <Button className={'!rounded-[10px] !px-5 !h-[43px]'}>{t('signUp')}</Button>
                        </Link>
                       <LanguageSelect />
                    </div>
                    {active ? (
                        <X onClick={toggleBurgerMenu} width={24} height={24} className={'block md:hidden'}/>
                    ) : (
                        <Menu onClick={toggleBurgerMenu} width={24} height={24} className={'block md:hidden'}/>
                    )}
                </div>
            </div>
            <AnimatePresence>
                {
                    active &&
                        <motion.div
                            className="h-screen top-0 z-40 w-full relative"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    ease: "easeOut",
                                    duration: 0.15,
                                },
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    ease: "easeIn",
                                    duration: 0.15,
                                },
                            }}
                        >
                            <div className="bg-white" ref={wrapperRef}>
                                <BurgerMenuNavigation setIsBurgerMenuOpen={setActive} />
                            </div>
                            <div className="w-full absolute h-full bg-black/50 z-50"/>
                        </motion.div>
                }
            </AnimatePresence>
        </nav>
    );
};