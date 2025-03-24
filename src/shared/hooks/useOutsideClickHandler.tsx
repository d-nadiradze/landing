"use client"

import React, { useEffect, useRef } from "react";

type UseOutsideClickHandler = (callback: () => void) => React.RefObject<HTMLDivElement | null>;

export const useOutsideClickHandler: UseOutsideClickHandler = (callback) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return wrapperRef;
};
