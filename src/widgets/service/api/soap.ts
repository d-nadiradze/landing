import {
    ServiceAdditionalInfoResponse,
    ServiceGeneralInfoProps, ServiceModel, TransactionInfoResponse,
} from "@/shared/types";
import {soapClient} from "@/shared/api";
import {checkServiceDetailUtils} from "@/shared/utils"
export const fetchServiceGeneralInfo = async (serviceInfoProps: ServiceGeneralInfoProps): Promise<ServiceAdditionalInfoResponse> => {
    return await soapClient.post("", {
        name: "GetInfo",
        hash: `GetInfo${serviceInfoProps.serviceId}${process.env.NEXT_PUBLIC_EMONEY_DISTRIBUTION_CODE}${process.env.NEXT_PUBLIC_EMONEY_DISTRIBUTION_KEY}`,
        parameters: checkServiceDetailUtils.checkServiceFormDataMapper(serviceInfoProps.formData, serviceInfoProps.serviceId, serviceInfoProps.serviceParameters)
    }).then(result => {
        return result.data
    })
}

export const fetchTransactionInfo = async (props: ServiceModel): Promise<TransactionInfoResponse> => {
    return await soapClient.post("", {
        name: "GetFullTransactionInfo",
        hash: `GetFullTransactionInfo${props.transactionCode}${process.env.NEXT_PUBLIC_EMONEY_DISTRIBUTION_CODE}${process.env.NEXT_PUBLIC_EMONEY_DISTRIBUTION_KEY}`,
        parameters: [
            {
                Key: 'transaction',
                Value: props.transactionCode
            }
        ]
    }).then(result => {
        return result.data
    })
}
