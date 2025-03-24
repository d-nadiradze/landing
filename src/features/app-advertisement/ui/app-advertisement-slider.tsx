import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow} from "swiper/modules";
import {SliderImage} from "@/shared/components";
import {appAdvertisementItems} from "@/shared/enums";

export const AppAdvertisementSlider = () => {
    const [active, setActive] = useState(1)

    const images = appAdvertisementItems()

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
            onSlideChange={(swiper) => {setActive(swiper.activeIndex)}}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper max-w-[900px] md:!hidden !block"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <SliderImage active={index == active} src={image.src} alt={image.alt} width={image.width} height={image.height} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};