import {combine, createEvent, createStore, sample} from "effector";
import {LinkedCardType, PayListOption, PayService, ServicePaymentModel} from "@/shared/types";
import {serviceModel} from "@/widgets/service";
import {CardOption, SUCCESSFULLY_REGISTERED_PAYMENT} from "@/shared/enums";
import {checkServiceDetailModel} from "@/features/service/check-details"
import {servicePaymentFormMapper, servicePaymentFormSoap} from "@/features/service/payment-form"
import {createEffect} from "effector/effector.umd";
import {servicePaymentFormUtils} from "@/shared/utils"
import {createGate} from "effector-react";
import {reset} from "patronum";

const $paymentFormStore = createStore<ServicePaymentModel>({
    amount: null,
    commission: null,
    validated: false,
    options: null,
    inputDisabled: false,
    selectedOptions: null,
    selectedPayment: CardOption,
})

export const PaymentFormGate = createGate()

const updatedAmount = createEvent<number | null>()
const updatedSelectOption = createEvent<PayListOption>()
const updatedSelectedPayment = createEvent<LinkedCardType>()
const registeredServicePayment = createEvent<PayService>()

const registerServicePaymentFx = createEffect(servicePaymentFormSoap.registerPayment)

reset({
    clock: PaymentFormGate.close,
    target: $paymentFormStore
})
sample({
    clock: serviceModel.effects.fetchServiceGeneralInfoFx.doneData,
    source: $paymentFormStore,
    filter: (_,generalInfo) => generalInfo.data.GetInfoResult.Code == 1,
    fn: (prevState, generalInfo) => {
        return servicePaymentFormMapper.attachDynamicParameters(prevState, generalInfo)
    },
    target: $paymentFormStore
})


sample({
    clock: updatedAmount,
    source: combine({
        paymentForm: $paymentFormStore,
        service: checkServiceDetailModel.store
    }),
    fn: ({paymentForm, service}, amount) => {
        return {
            ...paymentForm,
            amount: amount ? +amount.toFixed(2).toString() : null,
            commission:
                amount ?
                    +servicePaymentFormUtils.calculateCommission(
                        amount,
                        service.data.service.CommissionRate,
                        service.data.service.MinCommission,
                    )
                    :
                    null,
            validated: servicePaymentFormUtils.paymentFormValidated(
                amount,
                paymentForm.selectedOptions,
                paymentForm.options
            )
        }
    },
    target: $paymentFormStore
})

sample({
    clock: updatedSelectOption,
    source: combine({
        paymentForm: $paymentFormStore,
        serviceDetails: checkServiceDetailModel.store
    }),
    fn: ({paymentForm, serviceDetails}, option) => {
        const updatedInfo = servicePaymentFormUtils.updateSelectOption(
            paymentForm.selectedOptions,
            option,
            paymentForm.options,
            paymentForm.selectedPayment,
            serviceDetails.data.service.CommissionRate,
            serviceDetails.data.service.MinCommission,
        )
        return {
            ...paymentForm,
            ...updatedInfo,
            validated: servicePaymentFormUtils.paymentFormValidated(
                updatedInfo.amount ?? 0,
                updatedInfo.selectedOptions,
                paymentForm.options,
            )
        }
    },
    target: $paymentFormStore
})

sample({
    clock: updatedSelectedPayment,
    source: $paymentFormStore,
    fn: (paymentForm, selectedPayment) => {
        return {
            ...paymentForm,
            selectedPayment: selectedPayment,
            validated: servicePaymentFormUtils.paymentFormValidated(
                paymentForm.amount,
                paymentForm.selectedOptions,
                paymentForm.options
            )
        }
    },
    target: $paymentFormStore
})

sample({
    clock: registeredServicePayment,
    target: registerServicePaymentFx
})

sample({
    clock: registerServicePaymentFx.doneData,
    source: serviceModel.store,
    filter: (_, response) => response.data.PayResult.Code == SUCCESSFULLY_REGISTERED_PAYMENT,
    fn: (prevState, response) => {
        return {
            ...prevState,
            transactionCode: response.data.PayResult.Value.Code
        }
    },
    target: [
        serviceModel.store,
        serviceModel.effects.fetchedTransactionInfoFx
    ]
})

export const events = {
    updatedAmount,
    updatedSelectOption,
    updatedSelectedPayment,
    registeredServicePayment
}

export const store = $paymentFormStore