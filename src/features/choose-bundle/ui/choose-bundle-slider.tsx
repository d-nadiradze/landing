import React, {useState} from 'react';
import {Autoplay, EffectCoverflow} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {ChooseBundleSlide} from "@/features/choose-bundle";
import {bundleItems} from "@/shared/enums";

export const ChooseBundleSlider = () => {
    const [active, setActive] = useState(0);

    const bundles = bundleItems()

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
            {bundles.map((bundle, index) => (
                <SwiperSlide key={index}>
                    <ChooseBundleSlide active={index == active} bundle={bundle} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};