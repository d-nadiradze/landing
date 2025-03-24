import {HoverCard} from '@/shared/components';
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow} from "swiper/modules";
import {Flag, Lightbulb, Sparkles} from "lucide-react";
import {useTranslations} from "next-intl";

const cultureSliders = [
    {
        name: 'brilliance',
        text: 'brillianceText',
        icon: <Sparkles width={24} height={24} color={'white'} />

    },
    {
        name: 'curiosity',
        text: 'curiosityText',
        icon: <Lightbulb width={24} height={24} color={'white'} />
    },
    {
        name: 'destination',
        text: 'destinationText',
        icon: <Flag width={24} height={24} color={'white'} />
    }
]

export const CultureSlider = () => {
    const [active, setActive] = useState(1);
    const t = useTranslations("AboutUs.Culture")
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
            className="mySwiper max-w-[900px] md:!hidden !block mt-[60px]"
        >
            {cultureSliders.map((slide, index) => (
                <SwiperSlide key={index}>
                    <HoverCard icon={slide.icon} name={t(slide.name)} text={t(slide.text)} active={active === index}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};