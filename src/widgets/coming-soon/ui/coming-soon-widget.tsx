import React from 'react';
import {Heading, SubHeader} from "@/shared/components";
import Image from "next/image";
import {useViewport} from "@/shared/hooks";
import {Device} from "@/shared/enums";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {Button} from "@/shared/components/Button";


export const ComingSoonWidget = () => {
    const {deviceType} = useViewport();
    const t = useTranslations("ComingSoon")
    return (
        <section className="!py-6 flex flex-col  items-center">
            <Image src={'/images/coming-soon.png'} alt={'all rights reserved'} width={deviceType === Device.Mobile ? 280 : 400} height={deviceType === Device.Mobile ? 236 : 336}/>
            <Heading animate={false} className={'mt-[60px]'}>{t("title")}</Heading>
            <SubHeader animate={false} className={'md:max-w-[600px] max-w-[345px]'}>{t("description")}</SubHeader>
            <Link href={process.env.NEXT_PUBLIC_AUTH_URL + '/signup'}>
                <Button className={'md:mt-10 mt-8 !rounded-[10px] !px-6 !h-[51px]'}>{t("tryNew")}</Button>
            </Link>
            <Link href='https://emoney.ge'>
                <Button variant={'link'} className={'mt-6 mb-2'}>{t("redirectOldWeb")}</Button>
            </Link>
        </section>
    );
};