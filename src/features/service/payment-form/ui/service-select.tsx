import {AnimatePresence, motion} from "framer-motion";
import React, {useState} from "react";
import {customGray} from "@/shared/enums";
import {useOutsideClickHandler,useViewport} from "@/shared/hooks";
import {CheckMark,SwiperArrowIcon} from "@/shared/ui/icons";
import {PayListOption} from "@/shared/types";
import {Device} from "@/shared/enums";
import {Modal} from "@/shared/components/modal";
import {useTranslations} from "next-intl";

type ServiceMultipleSelectPropsType = {
    options: PayListOption[],
    selectedOptions: PayListOption[] | null,
    setSelectedOption: (option: PayListOption) => void,
    isMulti: boolean
};

const animateParent = {
    hidden: {opacity: 1},
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

export const ServiceSelect: React.FC<ServiceMultipleSelectPropsType> = ({
                                                                            options,
                                                                            selectedOptions,
                                                                            setSelectedOption,
                                                                            isMulti
                                                                        }) => {
    const [active, setActive] = useState(false);
    const {deviceType} = useViewport();
    const handleOutsideClick = () => {
        if (active) {
            setActive(!active);
        }
    };
    const t = useTranslations("Service")
    const wrapperRef = useOutsideClickHandler(handleOutsideClick);

    return (
        <div className={"relative w-full"} ref={wrapperRef}>
            <div
                className={`cursor-pointer h-full gap-y-2`}
                onClick={() => setActive(!active)}
            >
                <div className="w-full justify-between flex items-center gap-x-0.5">
                    <p className={"text-sm"}>{
                        (
                            selectedOptions?.length ?
                                selectedOptions
                                    .map(option => option.Value)
                                    .join(", ")
                                :
                                t("choose")
                        )
                    }
                    </p>
                    <SwiperArrowIcon color={customGray} className={"rotate-90"}/>
                </div>
            </div>
            <AnimatePresence mode={"wait"}>
                {active && (deviceType === Device.Laptop || deviceType === Device.Desktop) && (
                    <motion.div
                        variants={animateParent}
                        initial="hidden"
                        animate="visible"
                        className="w-full absolute top-[30px] bg-white rounded-[12px] border border-custom-gray-border z-50 max-h-[373px] shadow-custom-shadow overflow-hidden"
                    >
                        <motion.div className="flex flex-col ">
                            {options.map((option, index) => {
                                return (
                                    <motion.div
                                        variants={animateItem}
                                        key={index}
                                        onClick={() => {
                                            setSelectedOption(option)
                                            setActive(false)
                                        }}
                                        className="w-full flex gap-x-3 px-4 py-2 justify-between items-center cursor-pointer hover:bg-purple rounded-[10px] duration-300 hover:bg-opacity-10"
                                    >
                                        <div className="flex gap-x-3 items-center">
                                            <div className="">
                                                <p className={`text-sm uppercase`}>
                                                    {option.Value}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`flex items-center justify-center border
                                             ${selectedOptions?.find(selectedOption => selectedOption === option) ? "bg-purple" : "bg-custom-gray-bg"}  duration-300 rounded-full w-[24px] h-[24px] cursor-pointer`}
                                        >
                                            <CheckMark color={"white"}/>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                )}
                {active && (deviceType === Device.Mobile || deviceType === Device.Tablet) &&
                    <div className={"relative"}>
                        <Modal
                            isModalOpen={active}
                            setIsModalOpen={setActive}
                            className={"bottom-0 left-0 right-0 !p-0 absolute"}
                        >
                            <div className={"px-3"}>
                                <div className={"my-5"}>
                                    {options.map((option, index) => {
                                        return (
                                            <motion.div
                                                variants={animateItem}
                                                key={index}
                                                onClick={() => {
                                                    setSelectedOption(option)
                                                    setActive(false)
                                                }}
                                                className="w-full flex gap-x-3 px-4 py-2 justify-between items-center cursor-pointer hover:bg-purple rounded-[10px] duration-300 hover:bg-opacity-10"
                                            >
                                                <div className="flex gap-x-3 items-center">
                                                    <div className="">
                                                        <p className={`text-sm uppercase`}>
                                                            {option.Value}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`flex items-center justify-center border ${selectedOptions?.find(selectedOption => selectedOption === option) ? "bg-purple" : "bg-custom-gray-bg"}  duration-300 rounded-full w-[24px] h-[24px] cursor-pointer`}
                                                >
                                                    <CheckMark color={"white"}/>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Modal>
                    </div>
                }
            </AnimatePresence>
        </div>
    );
};
