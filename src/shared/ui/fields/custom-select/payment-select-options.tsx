import React from 'react';
import {motion} from "framer-motion";
import {twJoin, twMerge} from "tailwind-merge";
import {customSelect} from "@/shared/ui/fields";
import {TopUpIcon,CheckMark} from "@/shared/ui/icons";
import {customPurple,Device} from "@/shared/enums";
import {useViewport} from "@/shared/hooks";
import {LinkedCardType,BankItem} from "@/shared/types";
import {useTranslations} from "next-intl";

const animateParent = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.15,
            staggerChildren: 0.15,
            duration: 0.3,
            ease: "linear",
        },
    },
};

const animateItem = {
    hidden: {y: 5, opacity: 0},
    visible: {
        y: 0,
        opacity: 1,
    },
};

type PaymentSelectOptionProps = {
    selectedOption: LinkedCardType | BankItem | null;
    details?: "card" | "other" | "none";
    options?: LinkedCardType[] | BankItem[] | null;
    addCard?: () => void;
    addNew?: boolean;
    emoneyBalanceOption: LinkedCardType | BankItem | undefined;
    changeOption: (currency: LinkedCardType | BankItem) => void;
}

export const PaymentSelectOptions = ({
                                  emoneyBalanceOption,
                                  options,
                                  selectedOption,
                                  details,
                                  addNew,
                                  addCard,
                                  changeOption
}: PaymentSelectOptionProps) => {
    const {deviceType} = useViewport()
    const t = useTranslations("TopUp.Card")
    return (
        <motion.div
            variants={animateParent}
            initial="hidden"
            animate="visible"
            exit={"hidden"}
            className={twJoin(
                `rounded-[12px] border border-custom-gray-border z-50 max-h-[373px] shadow-custom-shadow overflow-hidden`,
                (deviceType === Device.Desktop || deviceType === Device.Laptop) &&
                "top-[50px] bg-white -right-2 -left-2 absolute"
            )}
        >
            <motion.div className="flex flex-col ">
                <div className="pb-2 max-h-[220px] overflow-y-auto custom-scroll">
                    {emoneyBalanceOption && (
                        <motion.div
                            variants={animateItem}
                            key={options?.length}
                            onClick={() => changeOption(emoneyBalanceOption)}
                            className="px-4 py-2 cursor-pointer hover:bg-purple rounded-[10px] duration-300 hover:bg-opacity-10"
                        >
                            <div className="flex justify-between items-center w-full antialiased">
                                <div className="flex items-center gap-x-3">
                                    {emoneyBalanceOption?.logo && (
                                        <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-purple-secondary">
                                            {/*<Emoney2Icon width={25} height={25}/>*/}
                                        </div>
                                    )}
                                    <div>
                                        <p className={'text-sm'}>{emoneyBalanceOption?.name ?? t("select")}</p>
                                    </div>
                                </div>
                                <div
                                    className={twMerge(
                                        `flex items-center justify-center border duration-300 rounded-full w-[24px] h-[24px] cursor-pointer`,
                                        `${selectedOption?.id == emoneyBalanceOption.id ? "bg-purple" : "bg-custom-gray-bg"}`
                                    )}
                                >
                                    <CheckMark color={"white"}/>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    {options
                        ?.filter((option) => !option.rootBalance)
                        .map((option, index) => {
                            return (
                                <motion.div
                                    variants={animateItem}
                                    key={index}
                                    onClick={() => changeOption(option)}
                                    className="px-4 py-2 cursor-pointer hover:bg-purple rounded-[10px] duration-300 hover:bg-opacity-10"
                                >
                                    <div className="flex justify-between items-center w-full antialiased">
                                        <customSelect.LinkedCardItem linkedCard={option} details={details}/>
                                        <div
                                            className={twJoin(
                                                `flex items-center justify-center border duration-300 rounded-full w-[24px] h-[24px] cursor-pointer`,
                                                `${selectedOption?.id == option.id ? "bg-purple" : "bg-custom-gray-bg"}`
                                            )}
                                        >
                                            <CheckMark color={selectedOption?.id == option.id ? "white" : "#F4F4F6"}/>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                </div>
                {addNew && (
                    <div
                        onClick={addCard}
                        className={
                            "text-center text-purple text-sm font-[500] flex items-center justify-center gap-x-1 py-3 border-t border-custom-gray-border hover:bg-gray-50 cursor-pointer"
                        }
                    >
                        <TopUpIcon color={customPurple} width={"15"} height={"15"}/>
                        <span>{t("addNew")}</span>
                    </div>
                )}
            </motion.div>
        </motion.div>
    )
};
