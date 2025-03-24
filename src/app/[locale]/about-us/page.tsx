"use client"

import React from 'react';
import {AboutUsHero, Culture, History, OurMission} from "@/widgets/about-us";

const Page = () => {
    return (
        <>
            <AboutUsHero/>
            <OurMission/>
            <History/>
            <Culture/>
        </>
    );
};

export default Page;