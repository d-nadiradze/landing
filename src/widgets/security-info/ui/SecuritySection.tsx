import React from 'react';
import {Heading, SubHeader} from "@/shared/components";
import Image from "next/image";
import {useViewport} from "@/shared/hooks";
import {Device} from "@/shared/enums";
import {Button} from "@/shared/components/Button";

export const SecuritySection = () => {
    const {deviceType} = useViewport()
    return (
        <section className="md:!py-24 !py-20 flex flex-col items-center">
            <div className="md:mb-20 mb-0">
                <Heading className={'!mb-0'}>All the security you</Heading>
                <Heading>might need</Heading>
                <SubHeader className={'hidden md:block max-w-none'}>
                    24/7 support and end-to-end security that makes us
                </SubHeader>
                <SubHeader className={'hidden md:block max-w-none'}>
                    the most trusted wallet on the market
                </SubHeader>
                <SubHeader className={'w-[345px] md:hidden block max-w-none'}>
                    24/7 support and end-to-end security that makes us the most trusted wallet on the market
                </SubHeader>
            </div>
            <Image src={'/images/security.svg'} alt={'all rights reserved'} width={deviceType === Device.Mobile ? 280 : 400} height={deviceType === Device.Mobile ? 280 : 400}/>
            <Button className={'md:mt-10 mt-7 !rounded-[10px] !px-6 !h-[51px]'}>Tell Me More</Button>
        </section>
    );
};
