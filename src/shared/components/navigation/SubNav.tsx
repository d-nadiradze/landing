import {motion} from 'framer-motion';
import React from 'react';
import {SubNavType} from "@/shared/types";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {useLocale} from "use-intl";

type SubNavPropsType = {
    subNav: SubNavType[] | null,
    setSubNav:  React.Dispatch<React.SetStateAction<SubNavType[] | null>>
}
const SubNav:React.FC<SubNavPropsType> = ({subNav, setSubNav}) => {
    const t = useTranslations('nav')
    const locale = useLocale();

    return (
        <div className={`w-full absolute top-[48px] -left-8 duration-300`}>
            <motion.div initial={{opacity: 0,}} animate={{opacity: 1,}} exit={{opacity: 0,}} className="fixed top-[75px] bottom-0 right-0 left-0 bg-black/20 z-[10]" onMouseEnter={() => setSubNav(null)} />
            <motion.div initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0, transition: {ease: "easeInOut", duration: 0.3}}}
                        exit={{opacity: 0,}}
                        className={`w-full relative z-50`}>
                <div className={`duration-300 min-w-[300px] bg-white flex flex-col gap-y-6 px-10 rounded-b-xl pb-10 pt-5`}>
                    {
                        subNav?.map((link, index) => (
                            <Link
                                onClick={() => setSubNav(null)}
                                href={`/${locale}/${link.url}`}
                                className={'hover:text-purple duration-300'}
                                key={index}>
                                {t(link.text)}
                            </Link>
                        ))
                    }
                </div>
            </motion.div>
        </div>);
};

export default SubNav;