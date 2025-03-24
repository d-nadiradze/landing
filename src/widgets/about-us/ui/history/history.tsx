import React, {useEffect, useState} from 'react';
import {Heading, HistoryCard, MiniSliderButton, SubHeader} from "@/shared/components";
import {useTranslations} from "next-intl";

const historyData = [
    {
        year: '2024',
        translationKey: 'newWeb'
    },
    {
        year: '2019',
        translationKey: 'gamblingWallet'
    },
    {
        year: '2015',
        translationKey: 'leadingServiceProvider'
    },
    {
        year: '2013',
        translationKey: 'usageIdCard'
    },
    {
        year: '2012',
        translationKey: 'taxServiceProvider'
    },
    {
        year: '2007',
        translationKey: 'founded'
    }
];

export const History = () => {
    const [selectedYear, setSelectedYear] = useState('2024')
    const t = useTranslations("AboutUs.History")
    const selectedHistory = historyData.find(item => item.year === selectedYear);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedYear((prevYear) => {
                const currentIndex = historyData.findIndex(item => item.year === prevYear);
                const nextIndex = (currentIndex + 1) % historyData.length;
                return historyData[nextIndex].year;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [selectedYear]);


    return (
        <section className={'md:py-24 py-20 history flex flex-col items-center'}>
            <div className="md:mb-20 mb-[60px] !text-white">
                <Heading animate={false} className={'!mb-0'}>{t("title")}</Heading>
                <SubHeader animate={false} className={'md:max-w-[600px] max-w-[350px] mt-6'}>
                    {t("description")}
                </SubHeader>
            </div>
            <div
                className="w-[300px] flex flex-col items-center justify-center h-[300px] border border-border-primary relative p-4 z-10 rounded-xl bg-white bg-opacity-30 backdrop-blur-xl">
                <div className="absolute top-5 w-full px-4 grid grid-cols-6 gap-x-1">
                    {historyData.map((item) => (
                        <div
                            key={item.year}
                            className={`h-[3px] rounded-[50px] ${selectedYear === item.year ? 'bg-white' : 'bg-[#F4F4F666]'} transition duration-300`}
                        />
                    ))}
                </div>
                {selectedHistory && (
                    <HistoryCard
                        year={selectedHistory.year}
                        text={t(selectedHistory.translationKey)}
                    />
                )}
            </div>
            <div className={'flex items-center justify-center mt-[74px] text-sm gap-x-1.5 flex-wrap gap-y-1.5'}>
                {historyData.map(item => (
                    <MiniSliderButton
                        key={item.year}
                        active={item.year === selectedYear}
                        onClick={() => setSelectedYear(item.year)}
                    >
                        {item.year}
                    </MiniSliderButton>
                ))}
            </div>
        </section>
    );
};