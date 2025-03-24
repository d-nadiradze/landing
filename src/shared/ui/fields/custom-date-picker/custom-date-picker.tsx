"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { customGray, customPurple, Device } from "@/shared/enums";
import { SwiperArrowIcon } from "@/shared/ui/icons";
import {
    filterToDatePickerFormat,
    formatDate,
} from "@/shared/utils";
import { customDatePicker } from "@/shared/ui/fields";
import { useViewport } from "@/shared/hooks";
import { twMerge } from "tailwind-merge";

type CustomDatePickerProps = {
    value: string;
    name: string;
    disabled?: boolean;
    startDate?: string;
    onChange: (date: Date | null) => void;
    label: string;
    labelCentered?: boolean;
    errors?: string;
    minYear?: number;
};

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
                                                                      value,
                                                                      name,
                                                                      disabled = false,
                                                                      startDate,
                                                                      onChange,
                                                                      label,
                                                                      labelCentered,
                                                                      errors,
                                                                      minYear = 2015,
                                                                  }) => {
    const [active, setActive] = useState<boolean>(false);
    const { deviceType } = useViewport();

    const handleInputClick = () => {
        if (!disabled) setActive((prev) => !prev);
    };

    return (
        <div className="w-full filter-container">
            <DatePicker
                open={active}
                closeOnScroll={(e: Event) => e.target === document}
                onChange={onChange}
                selected={filterToDatePickerFormat(value) as Date}
                formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 1)}
                name={name}
                maxDate={new Date()}
                minDate={
                    name === "endDate" && startDate
                        ? (filterToDatePickerFormat(startDate) as Date)
                        : undefined
                }
                onCalendarOpen={() => setActive(true)}
                onCalendarClose={() => setActive(false)}
                disabled={disabled}
                withPortal={
                    deviceType === Device.Mobile || deviceType === Device.Tablet
                        ? true
                        : undefined
                }
                renderCustomHeader={({ changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
                    <customDatePicker.CalendarCustomHeader
                        changeYear={changeYear}
                        changeMonth={changeMonth}
                        decreaseMonth={decreaseMonth}
                        increaseMonth={increaseMonth}
                        prevMonthButtonDisabled={prevMonthButtonDisabled}
                        nextMonthButtonDisabled={nextMonthButtonDisabled}
                        minYear={minYear}
                    />
                )}
                customInput={
                    <div
                        className={twMerge(
                            "relative flex items-center justify-between bg-custom-gray-bg rounded-lg text-custom-gray-text text-sm py-3.5 px-4 cursor-pointer",
                            disabled && "opacity-60 !cursor-not-allowed"
                        )}
                    >
                        <div className="flex items-center justify-between w-full" onClick={handleInputClick}>
                            <div>
                                <p
                                    className={twMerge(
                                        "absolute duration-300",
                                        labelCentered
                                            ? "top-1/2 -translate-y-1/2 text-custom-gray-text"
                                            : "top-1.5 text-[10px] text-purple",
                                        active ? "text-purple" : "text-custom-gray-text"
                                    )}
                                >
                                    {errors || label}
                                </p>

                                {value && (
                                    <p className="absolute text-custom-black bottom-2 duration-300">
                                        {formatDate(value)}
                                    </p>
                                )}
                            </div>
                            <SwiperArrowIcon
                                color={active ? customPurple : customGray}
                                className={twMerge(`${active ? "-rotate-90" : "rotate-90"} duration-300`)}
                            />
                        </div>
                    </div>
                }
            />
        </div>
    );
};
