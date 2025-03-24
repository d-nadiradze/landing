import React from 'react';
import {Heading, SubHeader} from "@/shared/components";
import Image from "next/image";
import {useTranslations} from "next-intl";


export const AboutUsHero = () => {
    const t = useTranslations("AboutUs")
    return (
        <section className="flex items-center bg-white h-[740px] overflow-hidden bg-pattern md:mt-0 -mt-5">
            <div className={'container flex flex-col items-center justify-center'}>
                <Heading animate={false}>
                    {t("title")}
                </Heading>
                <SubHeader animate={false} className={'max-w-[650px] mt-4'}>
                    {t("description")}
                </SubHeader>
                <Image src={'/images/about-us/emoney-office.jpg'} alt={'emoney office'} width={1040} height={585} className={'md:mt-20 mt-10 rounded-xl'}/>
            </div>
        </section>
    );
};