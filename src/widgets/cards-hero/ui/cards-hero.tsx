import React from 'react';
import {Heading, SubHeader} from "@/shared/components";
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {Button} from "@/shared/components/Button";


export const CardsHero = () => {
    const t = useTranslations("Cards")
    return (
        <section className="flex items-center bg-white h-[740px] overflow-hidden bg-pattern md:mt-0 mt-16">
            <div className={'container flex flex-col md:grid md:grid-cols-2 justify-between'}>
                <div className="flex flex-col md:items-start items-center justify-center z-10">
                    <Heading animate={false} className={'max-w-[400px] text-center md:!text-left'}>{t("title")}</Heading>
                    <SubHeader animate={false} className={'max-w-[450px] md:mt-4 text-center md:!text-left'}>{t("description")}</SubHeader>
                    <Link href={process.env.NEXT_PUBLIC_AUTH_URL + '/signin?backUrl=card'}>
                        <Button className={'!hidden !md:block mt-[60px] !rounded-[10px] !px-6 !h-[51px] !max-w-[218px]'}>{t("subscriptions")}</Button>
                    </Link>
                </div>
                <div className={'flex relative w-full'}>
                    <div className={'relative w-full flex items-center justify-center h-full z-10  mt-36 md:mt-0'}>
                        <Image src={'/images/cards/gradient-cyan.svg'} alt={'gradient card'}
                               className={'md:absolute w-full h-full max-w-[115px] md:max-w-[180px] mb-8 ml-8'}
                               width={180} height={286}/>
                        <Image src={'/images/cards/gradient-purple.svg'} alt={'gradient card'}
                               className={'absolute w-full h-full max-w-[115px] md:max-w-[180px] mb-6 ml-6'} width={180}
                               height={286}/>
                        <Image src={'/images/cards/white.svg'} alt={'white card'}
                               className={'absolute w-full h-full max-w-[115px] md:max-w-[180px] mb-4 ml-4'} width={180}
                               height={286}/>
                        <Image src={'/images/cards/black.svg'} alt={'black card'}
                               className={'absolute w-full h-full max-w-[115px] md:max-w-[180px] mb-2 ml-2'} width={180}
                               height={286}/>
                        <Image src={'/images/cards/purple.svg'} alt={'purple card'}
                               className={'absolute w-full h-full max-w-[115px] md:max-w-[180px]'} width={180}
                               height={286}/>
                    </div>
                </div>
                <Link href={process.env.NEXT_PUBLIC_AUTH_URL + '/signin?backUrl=card'}>
                    <div className={'flex md:hidden items-center justify-center'}>
                        <Button className={'mt-32 rounded-[10px] !px-6 !h-[51px] !max-w-[218px]'}>{t("subscriptions")}</Button>
                    </div>
                </Link>

            </div>

        </section>
    );
};