import React, {useState} from 'react';
import {Globe} from "lucide-react";
import {useParams, usePathname, useRouter} from "next/navigation";
import {LOCALES} from "@/shared/enums";
import {AnimatePresence} from "framer-motion";
import {Locale} from "@/shared/intl";
import {useLocale} from "use-intl";

export const LanguageSelect = () => {
    const pathname = usePathname()
    const router = useRouter()
    const locale = useLocale();
    const otherLocales = LOCALES.filter((lang) => lang !== locale)

    const [active, setActive] = useState(false)
    const handleLocaleSwitch = (lang: string) => {
        pathname?.includes(locale as string) ? router.replace(pathname.replace(locale as string, lang)) : router.replace(pathname ?? '');
    };

    return (
        <div className="flex items-center justify-center cursor-pointer relative text-sm">
            <div className={'flex gap-x-1 items-center'} onClick={() => setActive(!active)}>
                <Globe width={17} height={17} />
                <p className={"uppercase"}>{locale}</p>
            </div>
            <AnimatePresence>
                {
                    active &&
                    <div className="z-[999] absolute top-[48px] bg-white border border-custom-gray-border flex flex-col rounded-md" onMouseLeave={() => setActive(false)}>
                        {otherLocales.map((lang, index) => (
                            <button
                                key={index}
                                onClick={() => handleLocaleSwitch(lang)}
                                className="uppercase hover:bg-custom-gray-bg px-4 py-2"
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                }
            </AnimatePresence>
        </div>
    );
};