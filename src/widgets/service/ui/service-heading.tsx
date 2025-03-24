'use client'

import Image from "next/image";
import {useUnit} from "effector-react";
import {checkServiceDetailModel} from "@/features/service/check-details";
import {useTranslations} from "next-intl";
import {TextSkeleton} from "@/shared/components/skeletons";
import {serviceModel} from "@/widgets/service"
import {ServiceStep} from "@/shared/enums";
import {useRouter} from "next/navigation";

type ServiceHeadingProps = {
    children?: React.ReactNode
}
export const ServiceHeading = ({children}: ServiceHeadingProps) => {
    const t = useTranslations("Service")
    const {back: redirectBack} = useRouter()
    const {data,pending} = useUnit(checkServiceDetailModel.store)
    const {previousStep} = useUnit(serviceModel.events)
    const {step} = useUnit(serviceModel.store)
    const serviceId = data?.service?.ServiceID
    const serviceName = data?.service?.Description
    const serviceGroup = data?.service?.GroupDescription
    const goToPreviousStep = () => {
        if(step === ServiceStep.DetailsForm) {
            redirectBack()
        }
        previousStep()
    }
    return (
        <>
            <div
                className={'flex items-center gap-x-2 cursor-pointer sm:pl-0 pl-4 sm:pt-0 pt-4'}
                onClick={() => goToPreviousStep()}
            >
                <Image
                    src={'/images/icons/arrow.svg'}
                    className={'w-6 h-6'}
                    alt={'Back arrow'}
                    width={24}
                    height={24}
                />
                <p
                    className={'text-sm'}>{t("back")}</p>
            </div>
            {children}
            <div className={'mt-8 sm:px-0 px-4'}>
                <div className={`bg-white rounded-[10px] border border-border-primary p-4 w-full flex gap-x-3 items-center`}>
                    {
                        pending ?
                            <>
                                <div
                                    className="w-10 h-10 flex items-center justify-center bg-slate-200 rounded-xl animate-pulse">
                                </div>
                                <TextSkeleton className={'w-40 h-4'}/>
                            </>
                            :
                            <>
                                <div className="h-10 flex items-center justify-center overflow-hidden">
                                    <Image
                                        className="max-h-10 w-auto object-contain"
                                        src={`${process.env.NEXT_PUBLIC_SERVICE_IMG_URL}${serviceId}.png`}
                                        alt={`${serviceName} icon`}
                                        width={200}
                                        height={40} 
                                        layout="intrinsic"
                                    />
                                </div>
                                <div className={'flex flex-col gap-y-1.5'}>
                                    <p className={'font-bold text-sm text-custom-black-modal'}>{serviceName}</p>
                                    <p className={'text-xs text-custom-gray-text'}>{serviceGroup}</p>
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    );
};
