import React from 'react';
import {Heading, SliderCard, SubHeader} from "@/shared/components";
import {motion} from 'framer-motion';
import {P2PAdvertisementSlider} from "@/features/p2p-advertisement";
import {p2pAdvertisementItems} from "@/shared/enums";
import Link from "next/link";
import {useTranslations} from "next-intl";
import {Button} from "@/shared/components/Button";

export const P2PAdvertisementSection = () => {
    const items = p2pAdvertisementItems()
    const t = useTranslations("Home.EasySend")
    const t2 = useTranslations("Home.AnywhereAnytime")

    return (
        <>
            <section className="md:py-24 py-20 hiking flex flex-col items-center">
                <div className="md:mb-20 mb-[60px] !text-white flex flex-col items-center">
                    <Heading className={'max-w-[450px]'}>{t('title')}</Heading>
                    <SubHeader className={'max-w-[450px] md:max-w-[750px] md:leading-[40px] leading-[30px]'}>
                        {t('description')}
                    </SubHeader>
                </div>
                <div
                    className="w-[300px] flex flex-col items-center justify-center h-[300px] border border-border-primary relative p-4 z-10 rounded-xl bg-white/30 backdrop-blur-xl">
                    <div className="absolute top-5 w-full px-4 grid grid-cols-4 gap-x-1">
                        <div className="h-[3px] bg-[#F4F4F666] rounded-[50px]"/>
                        <div className="h-[3px] bg-[#F4F4F666] rounded-[50px]"/>
                        <div className="h-[3px] bg-[#F4F4F666] rounded-[50px]"/>
                        <div className="h-[3px] bg-[#F4F4F666] rounded-[50px]"/>
                    </div>
                    <div className="">
                        <p className={'text-white font-bold text-[28px]'}>50.00$</p>
                        <p className={'text-white text-center text-sm mt-1'}>Hiking Trip</p>
                    </div>
                    <div className="absolute bottom-5 w-full">
                        <p className={'text-center text-white text-sm'}>P2P Transfers</p>
                    </div>
                </div>
                <Link href={process.env.NEXT_PUBLIC_AUTH_URL + '/signin?backUrl=transfer/send-money'}>
                    <Button
                        className={'!rounded-[10px] !bg-white !hover:bg-custom-gray-bg !text-black !px-6 !h-[51px] mx-auto mt-16'}>
                        {t('button')}
                    </Button>
                </Link>
            </section>

            <motion.section
                className="md:!py-24 !py-20 container mx-auto flex items-center flex-col"
            >
                <Heading className={'max-w-[450px]'}>{t('title')}</Heading>
                <div className="hidden mt-20 md:grid text-center grid-cols-3 gap-x-7">
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <SliderCard
                                active={true}
                                title={t2(item.title)}
                                description={t2(item.description)}
                                imageSrc={item.imageSrc}
                                imageAlt={item.imageAlt}
                                imageWidth={item.imageWidth}
                                imageHeight={item.imageHeight}
                                isImageBottom={item.isImageBottom}
                            />
                        </React.Fragment>
                    ))}
                </div>

                <P2PAdvertisementSlider/>

            </motion.section>
        </>
    );
};