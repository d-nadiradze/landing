"use client"

import React from 'react';
import {Heading, SubHeader} from "@/shared/components";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {Button} from "@/shared/components/Button";

export const GamblingAdvert = () => {
    const t = useTranslations("Gambling.Advert")
    return (
        <section
            className="flex flex-col items-center justify-between bg-white h-[860px] overflow-hidden gambling-advert py-[100px]">
            <div className="flex flex-col items-center justify-between">
                <Heading className={'text-white max-w-[345px] md:max-w-[700px]'}>{t("title")}</Heading>
                <SubHeader className={'md:max-w-[600px] max-w-[345px] text-white'}>{t("description")}</SubHeader>
            </div>
            <Link href={process.env.NEXT_PUBLIC_AUTH_URL + '/signin?backUrl=hub'}>
                <Button
                    className={'!rounded-[10px] !bg-white !hover:bg-custom-gray-bg !text-black !px-6 !h-[51px] mx-auto'}>
                    {t("tryNow")}
                </Button>
            </Link>
        </section>
    );
};