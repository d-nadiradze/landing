import React from 'react';
import {Heading} from "@/shared/components";
import Image from "next/image";

export const FinanceSection = () => {
    return (
        <section className={`bg-white max-w-screen mt-20 relative overflow-hidden`}>
            <div className="relative flex flex-col items-center justify-center z-10 container mx-auto px-4 text-center">
                <Heading animate={false} className={'mb-10'}>{'Empower Your Finances with Emoney'}</Heading>
                <div className={'mt-20 flex justify-between w-full'}>
                    <Image src={'/images/finance/finance-1.svg'} width={325} height={500} alt={'Finance 1 Banner'}/>
                    <Image src={'/images/finance/finance-2.svg'} width={325} height={500} alt={'Finance 2 Banner'}/>
                    <Image src={'/images/finance/finance-3.svg'} width={325} height={500} alt={'Finance 3 Banner'}/>
                </div>
            </div>
        </section>
    );
};
