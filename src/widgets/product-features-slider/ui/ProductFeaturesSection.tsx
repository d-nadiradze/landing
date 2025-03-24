import React from 'react';
import {Heading, SubHeader} from "@/shared/components";
import {FeaturesSlider} from "@/widgets/product-features-slider/ui/FeaturesSlider";
import {Device} from "@/shared/enums";
import {useViewport} from "@/shared/hooks";
import {useTranslations} from "next-intl";

export const ProductFeaturesSection: React.FC = () => {
    const {deviceType} = useViewport()
    const t = useTranslations("Home.ProductFeatures")
    return (
        <section className="relative z-20 md:mt-0 -mt-56 bg-white py-0 md:py-24">
            <div className="flex flex-col items-center justify-center mx-auto px-4 text-center">
                <Heading>{t("title")}</Heading>
                <SubHeader className={'!max-w-none'}>{t("description")}</SubHeader>
            </div>
            <div className="mt-[60px] md:mt-20">
                <FeaturesSlider swiperProps={{
                    slidesPerView: deviceType === Device.Mobile ? 1.3 : 2.5,
                    spaceBetween: deviceType === Device.Mobile ? 40 : 20
                }}/>
            </div>
        </section>
    );
};
