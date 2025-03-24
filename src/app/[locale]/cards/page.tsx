"use client"

import React from 'react';
import {CardsHero} from "@/widgets/cards-hero";
import {CardAdvertisement} from "@/widgets/card-advertisement";
import {RevolutionizeSpending} from "@/widgets/revolutionize-spending";
import {ImmediateControlWidget} from "@/widgets/immediate-control";
import {SecurityFeatures} from "@/widgets/security-features";
import {BundleSelect} from "@/widgets/bundle-select";

const Page = () => {
    return (
        <>
            <CardsHero/>
            <CardAdvertisement/>
            <RevolutionizeSpending/>
            <ImmediateControlWidget/>
            <SecurityFeatures/>
            <BundleSelect/>
        </>
    );
};

export default Page;