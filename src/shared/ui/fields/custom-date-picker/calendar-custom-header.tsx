"use client"

import React, {useEffect, useState} from "react";
import {customDatePicker} from "@/shared/ui/fields";
import {SwiperArrowIcon} from "@/shared/ui/icons";
import {customBlack,Months} from "@/shared/enums";

type CalendarCustomHeaderProps = {
    changeYear: (year: number) => void;
    changeMonth: (month: number) => void;
    decreaseMonth: () => void;
    increaseMonth: () => void;
    prevMonthButtonDisabled: boolean;
    nextMonthButtonDisabled: boolean;
    minYear?: number
};

type CalendarState = {
    months: string[];
    years: number[];
};

export const CalendarCustomHeader: React.FC<CalendarCustomHeaderProps> = ({
                                                                       changeYear,
                                                                       changeMonth,
                                                                       decreaseMonth,
                                                                       increaseMonth,
                                                                       prevMonthButtonDisabled,
                                                                       nextMonthButtonDisabled,
                                                                       minYear = 2015
                                                                   }) => {
    const [calendar, setCalendar] = useState<CalendarState>({
        months: Object.keys(Months),
        years: [],
    });
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(
        calendar.months[new Date().getMonth()]
    );

    useEffect(() => {
        const years: number[] = [];
        for (let year = new Date().getFullYear(); year >= minYear; year--) {
            years.push(year);
        }
        setCalendar((prevState) => ({
            ...prevState,
            years: years,
        }));
    }, []);

    const handleChangeMonth = (action: "decrease" | "increase") => {
        const currentIndex = calendar.months.indexOf(selectedMonth!);

        let newMonthIndex;
        if (action === "decrease") {
            newMonthIndex =
                currentIndex === Months.January ? Months.December : currentIndex - 1;
            setSelectedYear(
                currentIndex === Months.January ? selectedYear - 1 : selectedYear
            );
            decreaseMonth();
        } else {
            newMonthIndex =
                currentIndex === Months.December ? Months.January : currentIndex + 1;
            setSelectedYear(
                currentIndex === Months.December ? selectedYear + 1 : selectedYear
            );
            increaseMonth();
        }

        setSelectedMonth(calendar.months[newMonthIndex]);
    };

    return (
        <div className={"flex items-center justify-between bg-white"}>
            <button
                type={"button"}
                onClick={() => {
                    handleChangeMonth("decrease");
                }}
                disabled={prevMonthButtonDisabled}
            >
                <SwiperArrowIcon color={customBlack} className={"rotate-180"}/>
            </button>
            <customDatePicker.DateSelect
                options={calendar.months as string[]}
                selectedOption={selectedMonth!}
                setSelectedOption={(selectedMonth) =>
                    setSelectedMonth(selectedMonth as string)
                }
                onChange={(selectedMonth) =>
                    changeMonth(calendar.months.indexOf(selectedMonth as string))
                }
            />
            <customDatePicker.DateSelect
                options={calendar.years}
                selectedOption={selectedYear}
                setSelectedOption={(selectedYear) =>
                    setSelectedYear(selectedYear as number)
                }
                onChange={(selectedYear) => changeYear(selectedYear as number)}
            />
            <button
                type={"button"}
                onClick={() => {
                    handleChangeMonth("increase");
                }}
                disabled={nextMonthButtonDisabled}
            >
                <SwiperArrowIcon color={customBlack}/>
            </button>
        </div>
    );
};
