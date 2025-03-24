import React from 'react';
import {EntertainWidget} from "@/widgets/entertain";
import {OptimizeGamblingWidget} from "@/widgets/optimize-gambling";
import {GamblingAdvert} from "@/widgets/gambling-advert";
import {GamblingSecurity} from "@/widgets/gambling-security";

const Page = () => {
    return (
        <>
            <EntertainWidget/>
            <OptimizeGamblingWidget/>
            <GamblingAdvert/>
            {/*<GamblingSecurity/>*/}
        </>
    );
};

export default Page;