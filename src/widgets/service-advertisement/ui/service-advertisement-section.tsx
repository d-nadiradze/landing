import React from 'react';
import {motion} from "framer-motion";
import {Heading, SliderCard} from "@/shared/components";
import {serviceAdvertisementItems} from "@/shared/enums";
import {ServiceAdvertisementSlider} from "@/features/service-advertisement";
import {useTranslations} from "next-intl";

export const ServiceAdvertisementSection = () => {
    const items = serviceAdvertisementItems()
    const t = useTranslations("Services.ServiceAdvertisement")
    return (
        <motion.section
            className="!py-24 container mx-auto"
        >
            <Heading className={'!mb-0'}>{t("title")}</Heading>
            <div className="hidden mt-20 md:grid text-center grid-cols-3 gap-x-7">
                {items.map((item,index) => (
                    <React.Fragment key={index}>
                        <SliderCard
                            active={true}
                            title={t(item.translationKey)}
                            description={t(item.translationKey + `Description`)}
                            imageSrc={item.imageSrc}
                            imageAlt={item.imageAlt}
                            imageWidth={item.imageWidth}
                            imageHeight={item.imageHeight}
                            isImageBottom={item.isImageBottom}
                        />
                    </React.Fragment>
                ))}
            </div>

            <ServiceAdvertisementSlider />

        </motion.section>
    );
};
