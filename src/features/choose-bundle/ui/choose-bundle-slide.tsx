import React from 'react';
import {RowHeading} from "@/shared/components";
import Image from "next/image";
import Link from "next/link";
import {Bundle} from "@/shared/types";
import {Button} from "@/shared/components/Button";


type ChooseBundleSlideProps = {
    bundle: Bundle,
    active: boolean;
}

export const ChooseBundleSlide: React.FC<ChooseBundleSlideProps> = ({bundle, active}) => {
    return (
        <div className={`grid grid-rows-11 ${active ? '' : 'opacity-50'} duration-300`}>
            <div className={`flex flex-col items-center justify-end`}>
                {
                    bundle.mostPopular &&
                        <p className={'bg-purple text-white w-full text-center text-sm py-2.5 rounded-t-xl'}>
                            Most Popular
                        </p>
                }
                <p className={`flex-end ${bundle.mostPopular ? 'bg-purple-secondary' : 'bg-white rounded-t-2xl border border-custom-gray-border border-b-0'} w-full text-center py-4`}>
                    {bundle.category}
                </p>
            </div>
            <div className={`${bundle.mostPopular ? 'bg-purple-secondary' : 'bg-white border border-custom-gray-border border-b-0'} flex flex-col items-center justify-center`}>
                <h1 className={'font-bold text-[28px]'}>{bundle.pricePerMonth}</h1>
                <p>
                    Per Month
                </p>
            </div>
            <RowHeading
                className={`${bundle.mostPopular ? 'bg-purple-secondary' : 'bg-white border border-custom-gray-border border-b-0'} border-t flex justify-center`}>
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24} className={'!w-6 !h-6'}/>
                    <p>Physical Card</p>
                </div>
            </RowHeading>
            <RowHeading className={`${bundle.mostPopular ? 'bg-purple-secondary' : 'bg-white border border-custom-gray-border border-b-0'} flex justify-center`}>
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24} className={'!w-6 !h-6'}/>
                    <p>Contactless Payments</p>
                </div>
            </RowHeading>
            <RowHeading className={`${bundle.mostPopular ? 'bg-purple-secondary' : 'bg-white border border-custom-gray-border border-b-0'} flex justify-center`}>
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24}
                           className={'!w-6 !h-6'}/>
                    <p>3D Secure Payments</p>
                </div>
            </RowHeading>
            <RowHeading className={`${bundle.mostPopular ? 'bg-purple-secondary' : 'bg-white border border-custom-gray-border border-b-0'} flex justify-center`}>
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <Image src={'/images/icons/check.svg'} alt={'check'} width={24} height={24}
                           className={'!w-6 !h-6'}/>
                    <p>Crypto Spendings</p>
                </div>
            </RowHeading>
            <RowHeading className={`${bundle.mostPopular ? 'bg-purple-secondary' : 'bg-white border border-custom-gray-border border-b-0'} flex justify-center`}>
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <p className={'font-extrabold'}>{bundle.bonusCard}</p>
                    <p>Bonus Card</p>
                </div>
            </RowHeading>
            <RowHeading className={`${bundle.mostPopular ? 'bg-purple-secondary' : 'bg-white border border-custom-gray-border border-b-0'} flex justify-center !text-wrap`}>
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <p className={'font-extrabold'}>{bundle.atmWithdrawalLimit}</p>
                    <p>ATM Withdrawal Limits (24 Hours)</p>
                </div>
            </RowHeading>
            <RowHeading className={`${bundle.mostPopular ? 'bg-purple-secondary' : 'bg-white border border-custom-gray-border border-b-0'} flex justify-center`}>
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <p className={'font-extrabold'}>{bundle.purchaseLimit}</p>
                    <p>Purchase Limit (24 Hours)</p>
                </div>
            </RowHeading>
            <RowHeading className={`${bundle.mostPopular ? 'bg-purple-secondary' : 'bg-white border border-custom-gray-border border-b-0'} flex justify-center`}>
                <div className="flex flex-col items-center justify-center gap-y-2">
                    <p className={'font-extrabold'}>{bundle.utilityPaymentsFee}</p>
                    <p>Utility Payments Fee</p>
                </div>
            </RowHeading>
            <div className={`flex justify-center items-center ${bundle.mostPopular ? 'bg-purple-secondary' : 'bg-white border border-custom-gray-border'} rounded-b-xl`}>
                <Link href={process.env.NEXT_PUBLIC_AUTH_URL + '/signin?backUrl=card/order'}>
                    <Button className={'text-purple !hover:text-purple !py-4 !px-6'}>
                        Select
                    </Button>
                </Link>
            </div>
        </div>
    );
};