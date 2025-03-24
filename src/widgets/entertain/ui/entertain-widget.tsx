"use client"

import React from 'react';
import {Heading, SubHeader} from "@/shared/components";
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {Button} from "@/shared/components/Button";


export const EntertainWidget = () => {
    const t = useTranslations("Gambling.Entertain")
    return (
        <section className="flex items-center bg-white h-[740px] overflow-hidden bg-pattern">
            <div className={'container md:grid grid-cols-2 flex flex-col justify-between'}>
                <div className="flex flex-col justify-center z-10">
                    <Heading animate={false} className={'max-w-[400px] md:!text-left'}>{t("title")}</Heading>
                    <SubHeader animate={false} className={'max-w-[450px] mt-4 md:!text-left'}>{t("description")}</SubHeader>
                    <Link href={process.env.NEXT_PUBLIC_AUTH_URL + '/signin?backUrl=hub'} className={'hidden md:block'}>
                        <Button className={'mt-[60px] !rounded-[10px] !px-6 !h-[51px] !max-w-[218px]'}>{t("createGambling")}</Button>
                    </Link>
                </div>
                <div className={'relative w-full flex items-center justify-center h-full z-10 mt-[60px] md:mt-0'}>
                    <Image src={"/images/cup.png"} alt={'cup'} width={520} height={520} />
                </div>
                <Link href={process.env.NEXT_PUBLIC_AUTH_URL + '/signin?backUrl=hub'} className={'md:hidden block text-center'}>
                    <Button className={'mt-[60px] !rounded-[10px] !px-6 !h-[51px] !max-w-[218px]'}>{t("createGambling")}</Button>
                </Link>
            </div>
        </section>
    );
};