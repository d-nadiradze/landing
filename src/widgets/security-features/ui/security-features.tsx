import React from 'react';
import {Heading, SliderCard} from "@/shared/components";
import {motion} from "framer-motion";
import { cardSecurityFeatureItems } from '@/shared/enums';
import {SecurityFeaturesSlider} from "@/features/security-features";
import {useTranslations} from "next-intl";

export const SecurityFeatures = () => {
    const cardSecurityFeatures = cardSecurityFeatureItems()
    const t = useTranslations("Cards.SecurityFeatures")
    return (
        <motion.section
            className="md:!py-24 !py-20 container mx-auto"
        >
            <Heading className={'!mb-0'}>{t("title")}</Heading>
            <div className="hidden md:grid text-center grid-cols-3 gap-x-7">
                {cardSecurityFeatures.map((item, index) => (
                    <SliderCard
                        key={index}
                        active={true}
                        iconSrc={item.iconSrc}
                        iconAlt={item.iconAlt}
                        description={t(item.description)}
                        imageSrc={item.imageSrc}
                        imageAlt={item.imageAlt}
                        imageWidth={item.imageWidth}
                        imageHeight={item.imageHeight}
                        isImageBottom={item.isImageBottom}
                        light={true}
                    />
                ))}
            </div>
            <SecurityFeaturesSlider/>
        </motion.section>
    );
};