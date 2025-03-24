"use client"

import React from 'react';
import {BurgerMenuNavigationList} from "@/widgets/navigation";
import {useViewport} from "@/shared/hooks";
import {Device} from "@/shared/enums";
import Link from 'next/link';
import { SocialLinks } from '@/shared/enums/SocialLinks';
import Image from "next/image";
import {useTranslations} from "next-intl";

export const Footer = () => {
    const t = useTranslations('nav')
    const {deviceType} = useViewport()

    return (
        <footer className="bg-white py-5 border-t border-border-primary">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center space-x-4">
                        {/*<EmoneyIcon width={125} height={20}/>*/}
                    </div>
                    <div className="flex md:space-x-4 space-x-2">
                        <a href={SocialLinks.App} target="_blank" rel="noopener noreferrer">
                            {/*<AppStoreIcon width={107} height={40} className={'md:w-[107px] w-[102px]'}/>*/}
                        </a>
                        <a href={SocialLinks.App} target="_blank" rel="noopener noreferrer">
                            {/*<GooglePlayIcon height={40} width={107} className={'md:w-[107px] w-[102px]'}/>*/}
                        </a>
                    </div>
                </div>

                <div className={'block md:hidden pt-6 border-y border-border-primary'}>
                    <BurgerMenuNavigationList/>
                </div>

                <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 py-7 border-y border-border-primary">
                    <div>
                        <h3 className="font-bold mb-4">{t('personal')}</h3>
                        <ul className="space-y-2">
                            <li><Link href="/cards" className="text-custom-gray-text hover:text-purple">{t('cards')}</Link></li>
                            <li><Link href="/services" className="text-custom-gray-text hover:text-purple">{t('payments')}</Link></li>
                            <li><Link href="/coming-soon" className="text-custom-gray-text hover:text-purple">{t('moneyTransfer')}</Link></li>
                            <li><Link href="/gambling" className="text-custom-gray-text hover:text-purple">{t('gamblingWallet')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">{t('business')}</h3>
                        <ul className="space-y-2">
                            <li><Link href="/coming-soon" className="text-custom-gray-text hover:text-purple">{t('deals')}</Link></li>
                            <li><Link href="/coming-soon" className="text-custom-gray-text hover:text-purple">{t('partners')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">{t('company')}</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about-us" className="text-custom-gray-text hover:text-purple">{t('aboutUs')}</Link></li>
                            <li><Link href="/coming-soon" className="text-custom-gray-text hover:text-purple">{t('ourTeam')}</Link></li>
                            <li><Link href="/coming-soon" className="text-custom-gray-text hover:text-purple">{t('ourCulture')}</Link></li>
                            <li><Link href="/coming-soon" className="text-custom-gray-text hover:text-purple">{t('workingAtEmoney')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">{t('newsRoom')}</h3>
                        <ul className="space-y-2">
                            <li><Link href="/coming-soon" className="text-custom-gray-text hover:text-purple">{t('latestNews')}</Link></li>
                            <li><Link href="/coming-soon" className="text-custom-gray-text hover:text-purple">{t('media')}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">{t('legal')}</h3>
                        <ul className="space-y-2">
                            <li><Link href="/coming-soon" className="text-custom-gray-text hover:text-purple">{t('contactTerms')}</Link></li>
                            <li><Link href="/coming-soon" className="text-custom-gray-text hover:text-purple">{t('amlPolicy')}</Link></li>
                            <li><Link href="/coming-soon" className="text-custom-gray-text hover:text-purple">{t('feesAndLimits')}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-0 md:mt-6">
                    <div className="mt-4 md:mt-0 flex items-center space-x-4 order-2">
                        <Link href={SocialLinks.Facebook}
                              className="rounded-full border border-border-primary hover:text-purple p-1">
                            {/*<FbIcon width={deviceType === Device.Mobile ? 36 : 40}*/}
                            {/*        height={deviceType === Device.Mobile ? 36 : 40}/>*/}
                        </Link>

                        <Link href={SocialLinks.YouTube}
                              className="rounded-full border border-border-primary hover:text-purple p-1">
                            {/*<YoutubeIcon width={deviceType === Device.Mobile ? 36 : 40}*/}
                            {/*             height={deviceType === Device.Mobile ? 36 : 40}/>*/}
                        </Link>

                        <Link href={SocialLinks.Tweeter}
                              className="rounded-full border border-border-primary hover:text-purple p-1">
                            {/*<TweeterIcon width={deviceType === Device.Mobile ? 36 : 40}*/}
                            {/*             height={deviceType === Device.Mobile ? 36 : 40}/>*/}
                        </Link>

                        <Link href={SocialLinks.Instagram}
                              className="rounded-full border border-border-primary hover:text-purple p-1">
                            {/*<InstagramIcon width={deviceType === Device.Mobile ? 36 : 40}*/}
                            {/*               height={deviceType === Device.Mobile ? 36 : 40}/>*/}
                        </Link>

                        <Link href={SocialLinks.Telegram}
                              className="rounded-full border border-border-primary hover:text-purple p-1">
                            {/*<TelegramIcon width={deviceType === Device.Mobile ? 36 : 40}*/}
                            {/*              height={deviceType === Device.Mobile ? 36 : 40}/>*/}
                        </Link>

                        <Link href={SocialLinks.LinkedIn}
                              className="rounded-full border border-border-primary hover:text-purple p-1">
                            {/*<LinkedInIcon width={deviceType === Device.Mobile ? 36 : 40}*/}
                            {/*              height={deviceType === Device.Mobile ? 36 : 40}/>*/}
                        </Link>
                    </div>
                    <div
                        className="py-4 md:py-0 flex justify-center items-center md:space-x-8 space-x-[42px] order-1 md:order-2 md:border-0 border-b border-border-primary">
                        {/*<VisaIcon className={'cursor-pointer'} width={56} height={36}/>*/}
                        {/*<MastercardIcon className={'cursor-pointer'} width={48} height={36}/>*/}
                        <Image src={'/images/nbg.svg'} alt={'nbg'} width={156} height={35}/>
                    </div>
                </div>
            </div>
        </footer>
    );
};