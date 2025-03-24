"use client"

import React from 'react';
import {Xmark} from "@/shared/ui/icons";
import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";
import {Button} from "@/shared/components/Button";

type FailedProps = {
    children?: React.ReactNode,
    title?: string
}

export const Failed: React.FC<FailedProps> = ({children, title}) => {
    const router = useRouter()
    const t = useTranslations("Service")
    const handleRedirect = () => {
        router.back()
    }

    return (
        <section className="mx-auto max-w-[600px]">
            <div className={"md:pt-[52px] mt-5 p-3 sm:p-6"}>
                <div className={"flex flex-col items-center gap-y-10"}>
                    <div className={"p-5 bg-error rounded-[91px] mt-20"}>
                        <Xmark color={"white"} width={"80"} height={"80"}/>
                    </div>
                    <div className={"text-center"}>
                        <p className={"text-[28px] font-extrabold leading-[33.6px] tracking-[-3%]"}>
                            {title}
                        </p>
                        <p className={"text-custom-gray-text mt-2 md:w-[415px] w-[300px]"}>
                            {children}
                        </p>
                    </div>
                    <Button className={"!bg-purple text-white w-full mt-10"} onClick={handleRedirect}>
                        {t("back")}
                    </Button>
                </div>
            </div>
        </section>
    );
};