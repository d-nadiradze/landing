'use client'

import React from 'react';
import { Heading, SubHeader } from "@/shared/components/text";
import Link from 'next/link';
import {Button} from "@/shared/components/Button";

type HeroProps = {
    heading: string;
    subHeader: string;
    buttonText: string;
    className: string;
    children?: React.ReactNode;
    link?: string;
};

export const Hero = (props: HeroProps) => {
    const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        const targetId = props.link;
        if (targetId) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section className={`bg-white max-w-screen md:h-[1300px] h-[1100px] mt-20 relative overflow-hidden ${props.className}`}>
            <div className="relative flex flex-col items-center justify-center z-10 container mx-auto px-4 text-center">
                <Heading animate={false} className={'md:!mb-10 !mb-8 md:max-w-[600px] max-w-[256px]'}>
                    {props.heading}
                </Heading>
                <SubHeader animate={false}>{props.subHeader}</SubHeader>
                {props.link ? (
                    props.link.startsWith('#') ? (
                        <a href={props.link} onClick={handleSmoothScroll}>
                            <Button className={'md:mt-5 mt-2 !rounded-[10px] md:!px-6 !px-5 !h-[51px]'}>
                                {props.buttonText}
                            </Button>
                        </a>
                    ) : (
                        <Link href={props.link}>
                            <Button className={'md:mt-5 mt-2 !rounded-[10px] md:!px-6 !px-5 !h-[51px]'}>
                                {props.buttonText}
                            </Button>
                        </Link>
                    )
                ) : (
                    <Button className={'md:mt-5 mt-2 !rounded-[10px] md:!px-6 !px-5 !h-[51px]'}>
                        {props.buttonText}
                    </Button>
                )}
            </div>
            {props.children}
        </section>
    );
};
