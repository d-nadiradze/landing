"use client"

import {Hero} from "@/widgets/hero";
import {ProductFeaturesSection} from "@/widgets/product-features-slider";
import {PaymentsSection} from "@/widgets/payments";
import {AllMoneyCardSection} from "@/widgets/all-money-card";
import {AppAdvertisementSection} from "@/widgets/app-advertisement";
import {P2PAdvertisementSection} from "@/widgets/p2p-advertisement";
import React from "react";
import {useTranslations} from "next-intl";
import {useGate} from "effector-react";
import {ServiceGate} from "@/entities/services/gate/gate";
import {useLocale} from "use-intl";
import {Locale} from "@/shared/intl";


export default function Home() {
    const locale = useLocale() as Locale;
    useGate(ServiceGate,locale)
    const t = useTranslations("Home")
    return (
        <>
            <Hero
                heading={t("heading")}
                subHeader={t("subHeader")}
                buttonText={t("headingButtonText")}
                className={'cards'}
                link={process.env.NEXT_PUBLIC_AUTH_URL + '/signup'}
            />
            <ProductFeaturesSection />
            <PaymentsSection />
            <AllMoneyCardSection />
            <AppAdvertisementSection />
            <P2PAdvertisementSection />
            {/*<SecuritySection />*/}
        </>
    );
}
