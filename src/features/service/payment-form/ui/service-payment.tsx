import React, {useEffect, useRef} from 'react';
import {Grid, GridTitle, GridValue, BorderedLayout} from "@/shared/components";
import {customSelect, CustomInput} from "@/shared/ui/fields"
import {useUnit} from "effector-react";
import {CardOption, EmoneyOption} from "@/shared/enums";
import {LinkedCardType, ServiceParameter} from "@/shared/types";
import {useTranslations} from "next-intl";
import {
    servicePaymentFormModel,
    servicePaymentFormMapper,
    ServiceSelect
} from "@/features/service/payment-form"
import {checkServiceDetailModel} from '@/features/service/check-details';
import {serviceModel} from '@/widgets/service';
import {servicePaymentFormUtils} from "@/shared/utils"
import {Button} from "@/shared/components/Button";


export const ServicePayment = () => {
    const formRef = useRef<HTMLFormElement | null>(null)
    const {
        options,
        inputDisabled,
        selectedOptions,
        selectedPayment,
        amount,
        commission,
        validated
    } = useUnit(servicePaymentFormModel.store)
    const {fields: formData} = useUnit(checkServiceDetailModel.form)
    const {
        updatedSelectOption,
        updatedSelectedPayment,
        updatedAmount,
        registeredServicePayment
    } = useUnit(servicePaymentFormModel.events)
    const {orderId} = useUnit(serviceModel.store)
    const serviceParameters = useUnit(checkServiceDetailModel.store)
    const serviceTranslation = useTranslations("Service")
    const updateAmount = (value: string) => {
        updatedAmount(value.length > 0 ? +value : null)
    }
    const registerPayment = () => {
        const transaction = servicePaymentFormUtils.generateUniqueId()
        const registerPaymentFormData = servicePaymentFormMapper.registerServiceFormDataMapper(
            options,
            selectedOptions,
            formData.filter(item => item.Value !== 'list'),
            amount as number,
            serviceParameters.data?.serviceparameters as ServiceParameter[],
            serviceParameters.data?.service.ServiceID as number,
            transaction
        )
        if (selectedPayment === EmoneyOption) {
            window.location.href = process.env.NEXT_PUBLIC_AUTH_URL + `/signin?backUrl=service/${serviceParameters.data?.service.ServiceID}`
        } else {
            registeredServicePayment({
                formData: registerPaymentFormData,
                transaction: transaction,
                serviceId: serviceParameters.data?.service.ServiceID as number,
                amount: amount as number,
            })
        }
    }

    useEffect(() => {
        if (orderId && formRef.current) {
            formRef.current.submit()
        }
    }, [orderId])
    return (
        <>
            <div className={' border-t border-t-custom-gray-border-primary mt-6'}/>
            <div className="my-6 sm:px-0 px-4">
                <BorderedLayout classname={'border rounded-[16px] py-4 px-5'}>
                    {options &&
                        <Grid className={'sm:pt-0 pt-3'}>
                            <GridTitle>{options?.Caption?.length > 0 ? options.Caption : serviceTranslation("selectOption")}</GridTitle>
                            <GridValue>
                                {(options &&
                                    <ServiceSelect
                                        options={options.Parameters}
                                        selectedOptions={selectedOptions ?? []}
                                        setSelectedOption={(value) => {
                                            updatedSelectOption(value)
                                        }}
                                        isMulti={options.IsMultiselect}
                                    />
                                )
                                }
                            </GridValue>
                        </Grid>
                    }
                    <Grid className={'sm:pt-0 pt-3'}>
                        <GridTitle>{serviceTranslation("amount")}</GridTitle>
                        <GridValue>
                            <div className={'w-full flex justify-between items-center'}>
                                <CustomInput
                                    label={''}
                                    name={''}
                                    disabled={inputDisabled}
                                    className={'w-full'}
                                    inputClassName={'!bg-white !pt-2 !px-0 !pr-4'}
                                    hasClearBtn={false}
                                    value={amount?.toString()}
                                    placeholder={serviceTranslation("amount")}
                                    callback={(value) => updateAmount(value)}
                                />
                                <div className={'flex items-center gap-x-1'}>
                                    <div
                                        className={'pt-[2.5px] pb-[3.5px] px-1 bg-custom-gray-text rounded-full text-white w-4 h-4'}>
                                        {/*<GelIcon width={8} height={10}/>*/}
                                    </div>
                                    <p className={'text-sm text-custom-black'}>GEL</p>
                                </div>
                            </div>
                        </GridValue>
                    </Grid>
                    <Grid className={'sm:pt-0 pt-3'}>
                        <GridTitle>{serviceTranslation("paymentFrom")}</GridTitle>
                        <GridValue>
                            <customSelect.PaymentSelect
                                details="card"
                                options={[
                                    CardOption,
                                    EmoneyOption
                                ]}
                                selectedOption={selectedPayment}
                                setSelectedOption={(selectedOption) => updatedSelectedPayment(selectedOption as LinkedCardType)}
                            />
                        </GridValue>
                    </Grid>
                    <Grid className={'sm:pt-0 pt-3'}>
                        <GridTitle>{serviceTranslation("totalAmount")}</GridTitle>
                        <GridValue>
                            <p className={'font-extrabold'}>{(amount !== null && commission !== null) ? (amount + commission).toFixed(2) : ''}₾</p>
                            <p className={'text-custom-gray-text text-[12px]'}>{serviceTranslation("commission")}: {commission}₾</p>
                        </GridValue>
                    </Grid>
                </BorderedLayout>
            </div>
            <form name="tbcRedirectForm" id="tbcRedirectForm" action="https://ecommerce.ufc.ge/ecomm2/ClientHandler"
                  ref={formRef}
                  method="POST">
                {orderId &&
                    <input type="hidden" name="trans_id" id="trans_id_tbc" value={orderId}/>
                }
            </form>
            <div className={'sm:px-0 px-4'}>
                <Button
                    disabled={!validated}
                    className={'w-full mb-3'}
                    onClick={() => registerPayment()}
                >
                    {serviceTranslation("continue")}
                </Button>
            </div>
        </>
    )
}