import {EmoneyOption} from "@/shared/enums";
import {
    PayList,
    PayListOption,
    ServiceAdditionalInfoResponse,
    ServiceFormData,
    ServiceParameter,
    ServicePaymentModel
} from "@/shared/types";

export const registerServiceFormDataMapper = (
    options: PayList | null,
    selectedOptions: PayListOption[] | null,
    formData: ServiceFormData[],
    amount: number,
    serviceParameters: ServiceParameter[],
    serviceId: number,
    transaction: string
): ServiceFormData[] => {
    if (options && selectedOptions) {
        if (options.IsMultiselect) {
            formData.push({
                Key: 'multiselect_list',
                Value: JSON.stringify(selectedOptions?.map(selectedOption => selectedOption.Key))
            })
        } else {
            formData.push({
                Key: 'select_list',
                Value: selectedOptions[0].Key
            })
        }
    }
    if (options && options.Parameters[0].Amount) {
        formData.push({
            Key: 'fixedpricemark_select_list',
            Value: 0
        })
    }
    formData.push({
        Key: 'amount',
        Value: amount.toFixed(2)
    })
    formData.push({
        Key: 'currency',
        Value: 'GEL'
    })
    formData.push({
        Key: 'service',
        Value: serviceId
    })
    formData.push({
        Key: 'transaction',
        Value: transaction
    })
    return formData
}

export const attachDynamicParameters = (paymentForm: ServicePaymentModel,generalInfo: ServiceAdditionalInfoResponse) => {
    const payOptions = generalInfo.data.GetInfoResult.Value.Parameter.find(infoItem => infoItem.Key === 'pay_list')
    if (payOptions?.Value) {
        const options = JSON.parse(payOptions.Value) as PayList
        return {
            ...paymentForm,
            options: options,
            inputDisabled: options.Parameters[0].Amount != null,
            selectedPayment: EmoneyOption,
            validated: false
        }
    }
    return paymentForm
}