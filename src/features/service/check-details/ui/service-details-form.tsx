"use client"

import React, { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { checkServiceDetailModel, ServiceFields } from "@/features/service/check-details";
import { EmoneyCustomErrorCode, ONLY_AUTHORIZED_SERVICE_IDS } from "@/shared/enums";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { serviceModel } from "@/widgets/service";
import { useNotification } from "@/context/NotificationContext";
import {Button} from "@/shared/components/Button";

export const ServiceDetailsForm = () => {
    const { validated } = useUnit(checkServiceDetailModel.form);
    const { error } = useUnit(serviceModel.store);
    const { clearedError } = useUnit(serviceModel.events);
    const { setMessage, setType } = useNotification();
    const { validatedFormFx } = useUnit(checkServiceDetailModel.effects);
    const params = useParams();
    const t = useTranslations("Service");
    const errorTranslation = useTranslations("Error");
    const [isAuthorizedService, setIsAuthorizedService] = useState<boolean>(false);

    // ✅ Ensure serviceId is always a valid string
    const serviceId = typeof params?.serviceId === "string" ? params.serviceId : undefined;

    const checkDetails = () => {
        if (serviceId && ONLY_AUTHORIZED_SERVICE_IDS.includes(Number(serviceId))) {
            setIsAuthorizedService(true);
        } else {
            validatedFormFx({});
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsAuthorizedService(false);
        }, 3000);
        return () => {
            clearTimeout(timeout);
        };
    }, [isAuthorizedService]);

    useEffect(() => {
        if (error !== null) {
            setType("error");
            setMessage(errorTranslation(EmoneyCustomErrorCode[error]));
            const timeout = setTimeout(() => {
                clearedError();
            }, 3000);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [clearedError, error, errorTranslation, setMessage, setType]);

    return (
        <div className={"py-3"}>
            <div className={"mt-5 sm:px-0 px-4"}>
                <div className={"flex flex-col gap-y-2"}>
                    <ServiceFields />
                </div>
            </div>
            <div className={"mt-20 sm:px-0 px-4"}>
                {isAuthorizedService && (
                    <div className={"w-full rounded-md px-4 py-2 text-red-600 bg-gray-100 mb-2 text-center"}>
                        {t("authorizeService")}
                    </div>
                )}
                <Button
                    className={'text-sm !h-[48px] !px-6 !rounded-[12px] w-full'}
                    disabled={!validated}
                    onClick={checkDetails}
                >
                    {t("checkDetails")}
                </Button>
            </div>
        </div>
    );
};
