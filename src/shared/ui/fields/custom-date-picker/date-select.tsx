"use client"

import React, { useEffect, useState } from "react";
import {SwiperArrowIcon,CheckedIcon} from "@/shared/ui/icons";
import { customGray, customPurple } from "@/shared/enums";
import {useOutsideClickHandler} from "@/shared/hooks";

type DateSelectProps = {
    options: string[] | number[];
    selectedOption: number | string;
    setSelectedOption: React.Dispatch<React.SetStateAction<number | string>>;
    onChange: (selectedOption: string | number) => void;
};

export const DateSelect: React.FC<DateSelectProps> = ({
                                                   options,
                                                   selectedOption,
                                                   setSelectedOption,
                                                   onChange,
                                               }) => {
    const [active, setActive] = useState(false);
    const handleOutsideClick = () => {
        if (active) {
            setActive(!active);
        }
    };

    const wrapperRef = useOutsideClickHandler(handleOutsideClick);

    const handleSelect = (option: string | number) => {
        setSelectedOption(option);
        setActive(false);
    };

    useEffect(() => {
        onChange(selectedOption);
    }, [selectedOption]);

    return (
        <div ref={wrapperRef} className={"relative"}>
            <div
                onClick={() => setActive((prevState) => !prevState)}
                className={
                    "bg-custom-gray-bg border border-custom-gray-border rounded-md px-3 py-2 cursor-pointer flex items-center justify-between gap-x-1"
                }
            >
                <p
                    className={`text-sm font-medium ${active ? "text-purple" : "text-custom-black"} duration-300 select-none`}
                >
                    {selectedOption}
                </p>
                <SwiperArrowIcon
                    color={active ? customPurple : customGray}
                    className={`${active ? "-rotate-90" : "rotate-90"} duration-300`}
                />
            </div>
            {active && (
                <div
                    className={
                        "absolute py-4 bg-white rounded-xl border border-custom-gray-border w-32 max-w-40 top-11 right-1/2 translate-x-1/2 flex flex-col max-h-[200px] no-scroll-bar overflow-y-auto shadow-custom-shadow"
                    }
                >
                    {options.map((option, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => handleSelect(option)}
                                className={
                                    "px-4 py-2 font-normal text-sm flex items-center gap-3 cursor-pointer hover:bg-purple-secondary"
                                }
                            >
                                <div
                                    className={`${selectedOption === option ? "bg-purple border-purple" : "bg-white border-custom-gray-border"} border p-1 rounded-full`}
                                >
                                    <CheckedIcon color={"white"} size={16} />
                                </div>
                                {option}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
