import React from 'react';
import {Heading, SubHeader} from "@/shared/components";
import Image from "next/image";
import {useTranslations} from "next-intl";

export const OptimizeGamblingWidget = () => {
    const t = useTranslations("Gambling.OptimizeGambling")
    return (
        <section className="container !py-24 bg-white flex flex-col">
            <div className="flex flex-col items-center">
                <Heading className={'max-w-[420px]'}>{t("title")}</Heading>
                <SubHeader>{t("description")}</SubHeader>
            </div>
            <div className="hidden md:flex justify-center relative">
                <Image src={'/images/gambling.png'} priority alt={'gambling'} width={980} height={640}
                       className="md:w-[972px] md:h-auto !w-[1400px] h-[432px] z-10 md:mr-28 "/>
                <Image src={'/images/gambling-withdraw.svg'} priority alt={'withdraw'} width={248} height={732}
                       className="w-[210px] h-auto flex-shrink-0 z-30 absolute bottom-0 right-0"/>
                <div className="absolute bottom-0 w-full z-50 h-[70px] bg-gradient-to-b from-transparent to-white"/>
            </div>
            <Image src={'/images/gambling-mobile.png'} alt={'gambling-mobile'} width={860} height={440} className={'block md:hidden'}/>
        </section>
    );
};