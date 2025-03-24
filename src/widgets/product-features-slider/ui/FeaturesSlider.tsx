import React, {useState} from 'react';
import {Swiper, SwiperProps, SwiperSlide} from "swiper/react";
import {FeaturesSliderCard} from "@/widgets/product-features-slider/ui/FeaturesSliderCard";
import {Autoplay, EffectCoverflow} from "swiper/modules";

type FeaturesSliderProps = {
    swiperProps?: SwiperProps;
}

const imageSlides = [
    {
        image: 'slide-1.png',
        destination: 'Coffee Lab',
        price: '-7.99$',
        date: '14:12, Wednesday',
    },
    {
        image: 'slide-2.jpg',
        destination: 'Solo Trip',
        price: '-12.49$',
        date: '16:30, Monday',
    },
    {
        image: 'slide-3.jpeg',
        destination: 'Restaurant',
        price: '-45.99$',
        date: '11:00, Friday',
    },
    {
        image: 'slide-4.jpg',
        destination: 'Fitness',
        price: '-23.00$',
        date: '19:45, Saturday',
    },
    {
        image: 'slide-5.jpg',
        destination: 'Vacation',
        price: '-15.50$',
        date: '21:30, Sunday',
    }
];

export const FeaturesSlider: React.FC<FeaturesSliderProps> = ({swiperProps}) => {
    const [active, setActive] = useState(1);

    return (
        <Swiper
            {...swiperProps}
            effect={'coverflow'}
            grabCursor={true}
            initialSlide={1}
            speed={800}
            centeredSlides={true}
            autoplay={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
            }}
            onSlideChange={(swiper) => setActive(swiper.activeIndex)}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper max-w-[900px]"
        >
            {
                imageSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <FeaturesSliderCard
                            active={index === active}
                            image={slide.image}
                            location={slide.destination}
                            amount={slide.price}
                            date={slide.date}
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};
