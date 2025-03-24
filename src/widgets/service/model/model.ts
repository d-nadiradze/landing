import {checkServiceDetailModel} from "@/features/service/check-details";
import {combine, createEffect, createEvent, createStore, sample} from "effector";
import {serviceSoap,serviceApi} from "@/widgets/service"
import {ServiceStep} from "@/shared/enums";
import {ServiceModel} from "@/shared/types";
import {createGate} from "effector-react";
import {reset} from "patronum";

const $serviceStore = createStore<ServiceModel>({
    step: ServiceStep.DetailsForm,
    transactionCode: null,
    transactionInfo: null,
    orderId: null,
    error: null
})

export const ServiceGate = createGate()

const fetchServiceGeneralInfoFx = createEffect(serviceSoap.fetchServiceGeneralInfo)
const fetchedTransactionInfoFx = createEffect(serviceSoap.fetchTransactionInfo)
const refillTbcAccountFx = createEffect(serviceApi.refillTbcAccount)
const previousStep = createEvent()
const clearedError = createEvent()

reset({
    clock: ServiceGate.close,
    target: $serviceStore
})

sample({
    clock: checkServiceDetailModel.effects.validatedFormFx.finally,
    source: combine({
        service: checkServiceDetailModel.store,
        formData: checkServiceDetailModel.form
    }),
    fn: ({service, formData}) => {
        return {
            serviceId: service.data.service.ServiceID as number,
            serviceParameters: service.data.serviceparameters,
            formData: formData.fields
        }
    },
    target: fetchServiceGeneralInfoFx
})

sample({
    clock: fetchServiceGeneralInfoFx.doneData,
    source: $serviceStore,
    fn: (prevState, generalInfo) => {
        const code = generalInfo.data.GetInfoResult.Code
        const success = code === 1
        const currentStep = success ? ServiceStep.PaymentForm : ServiceStep.DetailsForm
        return {
            ...prevState,
            step: currentStep,
            error: success ? null : code
        }
    },
    target: $serviceStore
})

sample({
    clock: fetchedTransactionInfoFx.doneData,
    source: $serviceStore,
    filter: (_,transactionInfo) => transactionInfo.data.GetFullTransactionInfoResult.Code == 1,
    fn: (prevState,transactionInfo) => {
        return {
            ...prevState,
            transactionInfo: transactionInfo.data.GetFullTransactionInfoResult.Value
        }
    },
    target: refillTbcAccountFx
})

sample({
    clock: refillTbcAccountFx.doneData,
    source: $serviceStore,
    fn: (prevState,response) => {
        const orderId = response.order
        sessionStorage.setItem('orderId',orderId)
        return {
            ...prevState,
            orderId
        }
    },
    target: $serviceStore
})

sample({
    clock: previousStep,
    source: $serviceStore,
    fn: (store) => {
        return {
            ...store,
            step: store.step - 1
        }
    },
    target: $serviceStore
})

sample({
    clock: clearedError,
    source: $serviceStore,
    fn: (store) => {
        return {
            ...store,
            error: null
        }
    },
    target: $serviceStore
})


export const store = $serviceStore
export const events = {
    previousStep,
    clearedError
}
export const effects = {
    fetchServiceGeneralInfoFx,
    fetchedTransactionInfoFx
}