import React from 'react';
import {Heading, SubHeader} from "@/shared/components";
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {Button} from "@/shared/components/Button";

export const AllMoneyCardSection = () => {
    const t = useTranslations("Home.AllMoneyCard")
    return (
        <section className={'!py-20 md:!py-24 flex flex-col items-center bg-[#0D0D0D]'}>
            <div className="">
                <Heading className={'!text-white !mb-0'}>
                    {t("title")}
                </Heading>
                <Heading className={'!text-white'}>
                    {t("description")}
                </Heading>
            </div>
            <div className="mt-[120px] md:mt-[180px] mx-[50px] md:mx-0">
                <Image className={'w-full h-auto max-w-[400px] flex-shrink-0'} src={'/images/cards/purple-vertical.svg'}
                       alt={'All money card'} width={212} height={341} quality={60}/>
            </div>
            <div className="md:block hidden mt-[120px] md:mt-[180px]">
                <SubHeader className={'!text-white max-w-[650px] leading-[45px]'}>
                    {t("secondaryDescription")}
                </SubHeader>
            </div>
            <div className="block md:hidden mt-[120px] md:mt-[180px]">
                <SubHeader className={'!text-white max-w-none'}>
                    {t("secondaryDescription")}
                </SubHeader>
            </div>
            <Link href={process.env.NEXT_PUBLIC_AUTH_URL + '/signin?backUrl=card/order'}>
                <Button className={'!rounded-[10px] !bg-white !hover:bg-custom-gray-bg !text-black !px-6 !h-[51px] mx-auto mt-16'}>{t("chooseCard")}</Button>
            </Link>
        </section>
    );
};