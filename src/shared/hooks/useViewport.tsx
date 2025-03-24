"use client"

import {useState, useEffect} from 'react';
import {Device} from "@/shared/enums";

export function useViewport() {
    const [width, setWidth] = useState<number>();
    const [height, setHeight] = useState<number>();
    const [deviceType, setDeviceType] = useState<number>();

    useEffect(() => {
        if (typeof window !== "undefined") {

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    useEffect(() => {
        handleResize()
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        setDeviceType(getDeviceType(window.innerWidth));
    };

    function getDeviceType(width: number) {
        if (width < 768) {
            return Device.Mobile;
        } else if (width >= 768 && width < 992) {
            return Device.Tablet;
        } else if (width >= 992 && width < 1200) {
            return Device.Laptop;
        } else {
            return Device.Desktop;
        }
    }

    return {width, height, deviceType};
}