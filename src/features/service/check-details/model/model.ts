import {combine, createEffect, createEvent, createStore, sample} from "effector";
import {CheckServiceDetailModel, CheckServiceDetailProps, ServiceDetailForm, ServiceFormData} from "@/shared/types";
import {checkServiceDetailsSoap} from "@/features/service/check-details"
import {createGate} from "effector-react";
import {serviceMapper} from "@/shared/utils"
import {checkServiceDetailUtils} from "@/shared/utils"
import {reset} from "patronum";

const CHECK_SERVICE_DETAILS_INIT_VALUE = {
    data: {
        serviceparameters: [],
        service: {}
    },
    error: false,
    pending: true
}
const $checkServiceDetailsStore = createStore<CheckServiceDetailModel>(
    CHECK_SERVICE_DETAILS_INIT_VALUE
);

const $form = createStore<ServiceDetailForm>({
    fields: [],
    errors: null,
    validated: false
})

export const CheckServiceDetailGate = createGate<CheckServiceDetailProps>()

const initializedForm = createEvent()
const updatedFormData = createEvent<ServiceFormData>()

const fetchServiceDetailFx = createEffect(checkServiceDetailsSoap.getServiceParameters)
const validatedFormFx = createEffect()
sample({
    clock: CheckServiceDetailGate.open,
    target: fetchServiceDetailFx
})

reset({
    clock: CheckServiceDetailGate.close,
    target: [
        $checkServiceDetailsStore,
        $form
    ]
})


sample({
    clock: fetchServiceDetailFx.doneData,
    fn: (data) => {
        const serviceParameters = data.data.GetServicePropertiesResult.Value.Parameters.ServiceParameter
        const service = data.data.GetServicePropertiesResult.Value.Property
        return serviceMapper.successResponseData({
            serviceparameters: serviceParameters,
            service: service
        })
    },
    target: [
        $checkServiceDetailsStore,
        initializedForm
    ]
})

sample({
    clock: fetchServiceDetailFx.failData,
    fn: () => {
        return serviceMapper.errorResponseData(null)
    },
    target: $checkServiceDetailsStore
})

sample({
    clock: initializedForm,
    source: $checkServiceDetailsStore,
    fn: (data) => {
        return {
            fields: checkServiceDetailUtils.initializeForm(data.data.serviceparameters),
            errors: null,
            validated: false
        }
    },
    target: $form
})

sample({
    clock: updatedFormData,
    source: combine({
        serviceDetails: $checkServiceDetailsStore,
        form: $form
    }),
    fn: (prevState, field) => {
        return checkServiceDetailUtils.updateFormDataValue(
            prevState.serviceDetails.data.serviceparameters,
            prevState.form.fields,
            field
        )
    },
    target: $form
})

sample({
    clock: validatedFormFx,
    source: combine({
        serviceDetails: $checkServiceDetailsStore,
        form: $form
    }),
    fn: ({serviceDetails, form}) => {
        return {
            ...checkServiceDetailUtils.formValidator(
                form.fields,
                serviceDetails.data.serviceparameters
            ),
            fields: form.fields
        }
    },
    target: $form
})

export const store = $checkServiceDetailsStore
export const form = $form
export const events = {
    updatedFormData
}
export const effects = {
    validatedFormFx,
    fetchServiceDetailFx
}