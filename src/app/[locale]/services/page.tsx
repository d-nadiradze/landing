"use client"

import React from 'react';
import {ServiceList} from "@/entities/services";
import {Hero} from "@/widgets/hero";
import Image from "next/image";
import {ServiceAdvertisementSection} from "@/widgets/service-advertisement";
import {useGate} from "effector-react";
import {ServiceGate} from "@/entities/services/gate/gate";
import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {Locale} from "@/shared/intl";

const Page = () => {
    const params = useParams();
    const locale = (params?.locale || "en") as Locale;
    useGate(ServiceGate,locale as Locale)
    const t = useTranslations("Services")
    return (
        <>
            <Hero
                heading={t("title")}
                subHeader={t("description")}
                buttonText={t("headingButtonText")}
                className={'hub md:!h-[1000px] !h-[720px]'}
                link={'#services'}
            >
                <Image
                    src={'/images/payment-banner.png'}
                    width={1040}
                    height={640}
                    className={'hidden md:block mt-20 mx-auto'}
                    alt={'service payment banner'}
                />
                <Image
                    src={'/images/services-mobile.png'}
                    alt={'service payment banner'}
                    width={860}
                    height={432}
                />
            </Hero>
            <ServiceAdvertisementSection />
            <ServiceList />
        </>
    );
};

export default Page;