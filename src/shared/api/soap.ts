import {Lang, PayService} from "@/shared/types";
import {soapClient} from "@/shared/api/index";
import {sprintf} from "sprintf-js"

export const fetchServiceParameters = async (serviceId: number, lang: string) => {
    return await soapClient.post("", {
        name: "GetServiceProperties",
        hash: `GetServiceProperties${serviceId}${process.env.NEXT_PUBLIC_EMONEY_DISTRIBUTION_CODE}${process.env.NEXT_PUBLIC_EMONEY_DISTRIBUTION_KEY}`,
        parameters: [
            {
                Key: "service",
                Value: serviceId,
            }
        ]
    }).then(response => {
        return response.data
    })
}

export const registerPayment = async (props: PayService) => {
    const hash = sprintf(
        'Pay%s%.2f%s%s%s%s',
        props.serviceId,
        props.amount,
        "GEL",
        props.transaction,
        process.env.NEXT_PUBLIC_EMONEY_DISTRIBUTION_CODE,
        process.env.NEXT_PUBLIC_EMONEY_DISTRIBUTION_KEY
    );

    return await soapClient.post("", {
        name: "Pay",
        hash: hash,
        parameters: props.formData
    }).then(response => {
        return response.data
    })
}
