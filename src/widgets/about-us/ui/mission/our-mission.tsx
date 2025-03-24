import React from 'react';
import {AccomplishmentsCard, Heading, SubHeader} from "@/shared/components";
import {useTranslations} from "next-intl";

export const OurMission = () => {
    const t = useTranslations("AboutUs.OurMission")
    const accomplishmentTranslation = useTranslations("AboutUs.OurMission.Accomplishment")
    return (
        <section className="container bg-white md:!py-24 !mb-20 md:!mb-0 flex flex-col items-center justify-center">
            <Heading>{t("title")}</Heading>
            <SubHeader className="max-w-[650px]">
                {t("description")}
            </SubHeader>
            <div className="mt-20 grid md:grid-cols-4 grid-cols-2 w-full md:gap-x-5 gap-x-3 gap-y-3 md:gap-y-0">
                <AccomplishmentsCard title={accomplishmentTranslation("personalUserValue")} description={accomplishmentTranslation("personalUser")}/>
                <AccomplishmentsCard title={'20+'} description={accomplishmentTranslation("currencies")}/>
                <AccomplishmentsCard title={accomplishmentTranslation("transactionValue")} description={accomplishmentTranslation("transaction")}/>
                <AccomplishmentsCard title={'17'} description={accomplishmentTranslation("experience")}/>
            </div>
        </section>
    );
};