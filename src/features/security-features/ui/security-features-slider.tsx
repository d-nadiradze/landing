import React, {useState} from 'react';
import {cardSecurityFeatureItems} from "@/shared/enums";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow} from "swiper/modules";
import {SliderCard} from "@/shared/components";
import {useTranslations} from "next-intl";

export const SecurityFeaturesSlider = () => {
    const [active, setActive] = useState(0);

    const cardSecurityFeatures = cardSecurityFeatureItems()
    return (
        <Swiper
            effect={'coverflow'}
            slidesPerView={1.3}
            spaceBetween={32}
            grabCursor={true}
            initialSlide={1}
            speed={800}
            centeredSlides={true}
            autoplay={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false
            }}
            onSlideChange={(swiper) => setActive(swiper.activeIndex)}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper max-w-[900px] md:!hidden !block"
        >
            {cardSecurityFeatures.map((item, index) => (
                <SwiperSlide key={index}>
                    <SliderCard
                        key={index}
                        active={index == active}
                        iconSrc={item.iconSrc}
                        iconAlt={item.iconAlt}
                        description={item.description}
                        imageSrc={item.imageSrc}
                        imageAlt={item.imageAlt}
                        imageWidth={item.imageWidth}
                        imageHeight={item.imageHeight}
                        isImageBottom={item.isImageBottom}
                        light={true}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};