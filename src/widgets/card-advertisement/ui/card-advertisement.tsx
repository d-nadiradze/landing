import React from 'react';
import {Heading, SubHeader} from "@/shared/components";
import Image from "next/image";
import {useTranslations} from "next-intl";

export const CardAdvertisement = () => {
    const t = useTranslations("Cards.Advertisement")
    return (
        <section className="container bg-white !py-20 md:!py-24 flex flex-col">
            <div className="flex flex-col items-center">
                <Heading>{t("title")}</Heading>
                <SubHeader className={'max-w-[650px]'}>{t("description")}</SubHeader>
            </div>
            <div className="flex justify-center relative overflow-hidden">
                <Image src={'/images/phone/phone-left.png'} priority alt={'card'} width={301} height={732}
                       className="w-[700px] h-auto flex-shrink-0 absolute bottom-0 z-10 -left-24 md:-left-14"/>
                <Image src={'/images/phone/phone.png'} priority alt={'card'} width={301} height={732}
                       className="w-[700px] h-auto flex-shrink-0 z-20"/>
                <Image src={'/images/phone/phone-right.png'} priority alt={'card'} width={301} height={732}
                       className="w-[700px] h-auto flex-shrink-0 z-30 absolute bottom-0 -right-24 md:-right-14"/>
                <div className="absolute bottom-0 w-full z-50 h-[70px] bg-gradient-to-b from-transparent to-white"/>
            </div>
        </section>
    );
};