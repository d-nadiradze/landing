import React from 'react';
import {Heading, RowHeading, SubHeader} from "@/shared/components";
import Image from 'next/image';
import Link from "next/link";
import {ChooseBundleSlider} from "@/features/choose-bundle";
import {useTranslations} from "next-intl";
import {Button} from "@/shared/components/Button";

export const BundleSelect = () => {
    const t = useTranslations("Gambling.Bundle");
    const tableTranslations = useTranslations("Gambling.Bundle.Table");
    return (
        <section className="container bg-white !py-24 flex flex-col">
            <div className="flex flex-col items-center">
                <Heading className={'md:max-w-[650px] max-w-[345px]'}>{t("title")}</Heading>
                <SubHeader className={'max-w-[650px]'}>
                    {t("description")}
                </SubHeader>
            </div>
            <article className={'hidden md:grid grid-cols-5'}>
               <div className={'col-span-2 grid grid-rows-11'}>
                   <div></div>
                   <div></div>
                    <RowHeading className={'border-t'}>
                        {tableTranslations("physical")}
                    </RowHeading>
                    <RowHeading>
                        {tableTranslations("contactLess")}
                    </RowHeading>
                    <RowHeading>
                        {tableTranslations("3d")}
                    </RowHeading>
                    <RowHeading>
                        {tableTranslations("cryptoSpending's")}
                    </RowHeading>
                    <RowHeading>
                        {tableTranslations("bonusCards")}
                    </RowHeading>
                    <RowHeading>
                        {tableTranslations("atmWithdrawal")}
                    </RowHeading>
                    <RowHeading>
                        {tableTranslations("purchaseLimits")}
                    </RowHeading>
                    <RowHeading>
                        {tableTranslations("paymentFee")}
                    </RowHeading>
                   <div></div>
                </div>
                <div className={'grid grid-rows-11'}>
                    <div className={'flex flex-col items-center justify-end pb-2'}>
                        <p className={'flex-end'}>
                            {t("standard")}
                        </p>
                    </div>
                    <div className={'flex flex-col items-center'}>
                        <h1 className={'font-bold text-[28px]'}>7.00₾</h1>
                        <p>
                            {t("perMonth")}
                        </p>
                    </div>
                    <RowHeading className={'border-t flex justify-center'}>
                        <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24}/>
                    </RowHeading>
                    <RowHeading className={'flex justify-center'}>
                        <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24}/>
                    </RowHeading>
                    <RowHeading className={'flex justify-center'}>
                        <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24}/>
                    </RowHeading>
                    <RowHeading className={'flex justify-center'}>
                        <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24}/>
                    </RowHeading>
                    <RowHeading className={'flex justify-center'}>
                        0
                    </RowHeading>
                    <RowHeading className={'flex justify-center'}>
                        5,000₾
                    </RowHeading>
                    <RowHeading className={'flex justify-center'}>
                        30,000₾
                    </RowHeading>
                    <RowHeading className={'flex justify-center'}>
                        0.50₾
                    </RowHeading>
                    <div className={'flex justify-center'}>
                        <Link href={process.env.NEXT_PUBLIC_AUTH_URL + '/signin?backUrl=card/order'}>
                            <Button variant={"outline"} className={'text-purple !hover:text-purple !py-4 !px-6 my-3'}>
                                {t("select")}
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className={'grid grid-rows-11'}>
                    <div className={'flex flex-col items-center justify-end'}>
                        <p className={'bg-purple text-white w-full text-center text-sm py-2.5 rounded-t-xl'}>
                            {t("mostPopular")}
                        </p>
                        <p className={'flex-end bg-purple-secondary w-full text-center py-1'}>
                            {t("smart")}
                        </p>
                    </div>
                    <div className={'bg-purple-secondary flex flex-col items-center'}>
                        <h1 className={'font-bold text-[28px]'}>15.00₾</h1>
                        <p>
                            {t("perMonth")}
                        </p>
                    </div>
                    <RowHeading
                        className={'bg-purple-secondary border-t flex justify-center !border-custom-gray-border'}>
                        <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24}/>
                    </RowHeading>
                    <RowHeading className={'bg-purple-secondary flex justify-center !border-custom-gray-border'}>
                        <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24}/>
                    </RowHeading>
                    <RowHeading className={'bg-purple-secondary flex justify-center !border-custom-gray-border'}>
                        <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24}/>
                    </RowHeading>
                    <RowHeading className={'bg-purple-secondary flex justify-center !border-custom-gray-border'}>
                        <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24}/>
                    </RowHeading>
                    <RowHeading className={'bg-purple-secondary flex justify-center !border-custom-gray-border'}>
                        1
                    </RowHeading>
                    <RowHeading className={'bg-purple-secondary flex justify-center !border-custom-gray-border'}>
                        10,000₾
                    </RowHeading>
                    <RowHeading className={'bg-purple-secondary flex justify-center !border-custom-gray-border'}>
                        100,000₾
                    </RowHeading>
                    <RowHeading className={'bg-purple-secondary flex justify-center !border-custom-gray-border'}>
                        0.50₾
                    </RowHeading>
                    <div className={'flex justify-center bg-purple-secondary rounded-b-xl'}>
                        <Link href={process.env.NEXT_PUBLIC_AUTH_URL + '/signin?backUrl=card/order'}>
                            <Button variant={"default"} className={'text-purple !hover:text-purple !py-4 !px-6 my-3'}>
                                {t("select")}
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className={'grid grid-rows-11'}>
                    <div className={'flex flex-col items-center justify-end pb-2'}>
                        <p className={'flex-end'}>
                            {t("premium")}
                        </p>
                    </div>
                    <div className={'flex flex-col items-center'}>
                        <h1 className={'font-bold text-[28px]'}>35.00₾</h1>
                        <p>
                            {t("perMonth")}
                        </p>
                    </div>
                    <RowHeading className={'border-t flex justify-center'}>
                        <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24}/>
                    </RowHeading>
                    <RowHeading className={'flex justify-center'}>
                        <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24}/>
                    </RowHeading>
                    <RowHeading className={'flex justify-center'}>
                        <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24}/>
                    </RowHeading>
                    <RowHeading className={'flex justify-center'}>
                        <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24}/>
                    </RowHeading>
                    <RowHeading className={'flex justify-center'}>
                        2
                    </RowHeading>
                    <RowHeading className={'flex justify-center'}>
                        40,000₾
                    </RowHeading>
                    <RowHeading className={'flex justify-center'}>
                        150,000₾
                    </RowHeading>
                    <RowHeading className={'flex justify-center'}>
                        0₾
                    </RowHeading>
                    <div className={'flex justify-center'}>
                        <Link href={process.env.NEXT_PUBLIC_AUTH_URL + '/signin?backUrl=card/order'}>
                            <Button variant={"outline"} className={'text-purple !hover:text-purple !py-4 !px-6 my-3'}>
                                {t("select")}
                            </Button>
                        </Link>
                    </div>
                </div>
            </article>

            <ChooseBundleSlider />

        </section>
    );
};