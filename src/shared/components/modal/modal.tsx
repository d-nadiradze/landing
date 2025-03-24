"use client"

import React, {Dispatch, ReactNode, SetStateAction, useEffect} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {ModalPortal} from "@/shared/components";
import {useOutsideClickHandler} from "@/shared/hooks";

type ModalPropsType = {
    isModalOpen: boolean,
    setIsModalOpen: Dispatch<SetStateAction<boolean>>,
    children: ReactNode
    className?: string,
    noBlur?: boolean
}

export const Modal: React.FC<ModalPropsType> = ({isModalOpen, setIsModalOpen, children, className, noBlur}) => {
    const handleOutsideClick = () => {
        if (isModalOpen) setIsModalOpen(false)
    }

    const wrapperRef = useOutsideClickHandler(handleOutsideClick)

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isModalOpen]);

    return (
        <AnimatePresence>
            {
                isModalOpen &&
                <ModalPortal>
                    <motion.div
                        className={`fixed inset-0 z-[900] flex items-center justify-center ${!noBlur && 'bg-custom-black-modal bg-opacity-75'}`}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                            transition: {
                                ease: "easeOut",
                                duration: 0.15,
                            },
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                ease: "easeIn",
                                duration: 0.15,
                            },
                        }}
                    >
                        <div className={`bg-white p-6 md:rounded-[16px] max-h-[800px] lg:min-w-[600px] min-w-0 ${className}`} ref={wrapperRef}>
                            {children}
                        </div>
                    </motion.div>
                </ModalPortal>
            }
        </AnimatePresence>

    );
};