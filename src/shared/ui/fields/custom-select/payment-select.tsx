"use client"

import React, {useState} from "react";
import {SwiperArrowIcon,Xmark} from "@/shared/ui/icons";
import {customGray} from "@/shared/enums";
import {AnimatePresence} from "framer-motion";
import {useOutsideClickHandler,useViewport} from "@/shared/hooks";
import {Currency, LinkedCardType,BankItem} from "@/shared/types";
import {Modal} from "@/shared/components/modal";
import {Device} from "@/shared/enums";
import {twJoin} from "tailwind-merge";
import {customSelect} from "@/shared/ui/fields";
import {useTranslations} from "next-intl";

type PaymentSelectPropsType = {
    selectedOption: LinkedCardType | BankItem  | null;
    setSelectedOption?: (option: LinkedCardType | BankItem  | null) => void;
    details?: "card" | "other" | "none";
    options?: LinkedCardType[] | BankItem[] | null;
    addCard?: () => any;
    addNew?: boolean;
    selectedCurrency?: Currency;
    title?: string;
    classNames?: string
};

export const PaymentSelect: React.FC<PaymentSelectPropsType> = ({
                                                             selectedOption,
                                                             setSelectedOption,
                                                             details = "card",
                                                             options,
                                                             addCard,
                                                             addNew,
                                                             title,
                                                             classNames
                                                         }) => {
    const [active, setActive] = useState(false);
    const t = useTranslations("TopUp.Card")
    const {deviceType} = useViewport();


    const handleOutsideClick = () => {
        if (active) {
            setActive(!active);
        }
    };
    const wrapperRef = useOutsideClickHandler(handleOutsideClick);

    const changeOption = (currency: LinkedCardType | BankItem) => {
        if (setSelectedOption) {
            setSelectedOption(currency);
            setActive(!active)
        }
    };

    const emoneyBalanceOption = options?.find(
        (option) => option.rootBalance === true
    );

    return (
        <div className={"relative w-full"} ref={wrapperRef}>
            <div
                className={twJoin(
                    `flex justify-between items-center cursor-pointer h-full`,
                    classNames && classNames
                )}
                onClick={() => setActive(!active)}
            >
                {selectedOption?.id == 2 ? (
                    <div className="flex items-center gap-x-3">
                        {emoneyBalanceOption?.logo && (
                            <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-purple-secondary">
                                {/*<Emoney2Icon width={25} height={25}/>*/}
                            </div>
                        )}
                        <div>
                            <p className={'text-sm'}>{emoneyBalanceOption?.name ?? t("select")}</p>
                            <p className={'text-[12px] text-custom-gray-text'}></p>
                        </div>
                    </div>
                ) : (
                    <customSelect.LinkedCardItem linkedCard={selectedOption} details={details}/>
                )}
                <div className="flex items-center gap-x-0.5">
                    <SwiperArrowIcon color={customGray} className={"rotate-90"}/>
                </div>
            </div>
            <AnimatePresence>
                {active &&
                    (deviceType === Device.Desktop || deviceType === Device.Laptop)
                    ?
                    <customSelect.PaymentSelectOptions
                        selectedOption={selectedOption}
                        details={details}
                        options={options}
                        addNew={addNew}
                        addCard={addCard}
                        changeOption={changeOption}
                        emoneyBalanceOption={emoneyBalanceOption}
                    />
                    :
                    <div className={"relative"}>
                            <Modal
                                isModalOpen={active}
                                setIsModalOpen={setActive}
                                className={"bottom-0 left-0 right-0 !p-0 absolute"}
                            >
                                <div className={"px-3"}>
                                    <div className={"flex justify-between mt-7"}>
                                        <p>{title}</p>
                                        <Xmark/>
                                    </div>
                                    <div className={"my-5"}>
                                        <customSelect.PaymentSelectOptions
                                            selectedOption={selectedOption}
                                            details={details}
                                            options={options}
                                            addNew={addNew}
                                            addCard={addCard}
                                            changeOption={changeOption}
                                            emoneyBalanceOption={emoneyBalanceOption}
                                        />
                                    </div>
                                </div>
                            </Modal>
                        </div>
                }
            </AnimatePresence>
        </div>
    );
};
