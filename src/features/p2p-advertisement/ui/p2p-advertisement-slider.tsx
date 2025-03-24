import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import {SliderCard} from "@/shared/components";
import {p2pAdvertisementItems} from "@/shared/enums";

export const P2PAdvertisementSlider = () => {
    const [active, setActive] = useState(0);

    const slides = p2pAdvertisementItems()

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
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <SliderCard
                        active={index == active}
                        title={slide.title}
                        description={slide.description}
                        imageSrc={slide.imageSrc}
                        imageAlt={slide.imageAlt}
                        imageWidth={slide.imageWidth}
                        imageHeight={slide.imageHeight}
                        isImageBottom={slide.isImageBottom}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
