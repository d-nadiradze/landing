"use client"

import React from 'react';
import {CheckMark} from "@/shared/ui/icons";
import {useRouter} from "next/navigation";
import {useUnit} from "effector-react";
import {successModel} from '..';
import {useTranslations} from "next-intl";
import {Button} from "@/shared/components/Button";

type SuccessProps = {
    children?: React.ReactNode,
    title: string,
    redirectUrl?: string
}

export const Success: React.FC<SuccessProps> = ({children, title, redirectUrl}) => {
    const router = useRouter()
    const {clearSuccess} = useUnit(successModel.events)
    const t = useTranslations("Service")
    const handleRedirect = () => {
        clearSuccess()
        redirectUrl ? router.push(redirectUrl) : router.push("/")
    }

    return (
        <section className="mx-auto max-w-[600px]">
            <div className={"md:pt-[52px] mt-5 p-3 sm:p-6"}>
                <div className={"flex flex-col items-center gap-y-10"}>
                    <div className={"p-5 bg-purple rounded-[91px] mt-20"}>
                        <CheckMark color={"white"} width={"80"} height={"80"}/>
                    </div>
                    <div className={"text-center"}>
                        <p className={"text-[28px] font-extrabold leading-[33.6px] tracking-[-3%]"}>
                            {title}
                        </p>
                        <p className={"text-custom-gray-text mt-2 md:w-[415px] w-[300px]"}>
                            {children}
                        </p>
                    </div>
                    <Button className={"bg-purple text-white w-full mt-10"} onClick={handleRedirect}>
                        {t("done")}
                    </Button>
                </div>
            </div>
        </section>
    );

};