import React from 'react';
import {Heading, SubHeader} from "@/shared/components";
import {ServiceCard, ServiceModel} from "@/entities/services";
import {useViewport} from "@/shared/hooks";
import {Device} from "@/shared/enums";
import Link from "next/link";
import {useUnit} from "effector-react";
import {useTranslations} from "next-intl";
import {Button} from "@/shared/components/Button";

export const PaymentsSection = () => {
    const {services} = useUnit(ServiceModel.store)
    const {deviceType} = useViewport()
    const t = useTranslations("Home.Payments")
    const displayedServices = deviceType === Device.Mobile ? services?.slice(0, 4) : services?.slice(0, 8);
    return (
        <section className="w-full flex flex-col justify-center !my-20 md:!my-24 container">
            <div className={'flex flex-col items-center justify-center mb-[60px] md:mb-20'}>
                <Heading>{t("title")}</Heading>
                <SubHeader>{t("description")}</SubHeader>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4 mb-10 md:mb-16">
                {
                    displayedServices?.map((service, index) => (
                        <React.Fragment key={index}>
                            <ServiceCard img={process.env.NEXT_PUBLIC_AMAZON_URL as string + service.image} serviceName={service.description} key={service.id} serviceId={service.serviceid}/>
                        </React.Fragment>
                    ))
                }
            </div>
            <Link href={'/services#services'} className={'flex items-center justify-center'}>
                <Button className={'!rounded-[10px] !px-5 md:!px-6 !h-[51px] mx-auto'}>{t("exploreServices")}</Button>
            </Link>
        </section>
    );
};