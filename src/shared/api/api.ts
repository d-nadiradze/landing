import {AxiosResponse} from "axios";
import {httpClient} from "@/shared/api/index";
import {RefillTbc, RefillTbcResponse} from "@/shared/types";
import {Locale} from "@/shared/intl";

export const fetchServices = async (locale: Locale): Promise<AxiosResponse> => {
    return await httpClient.post("", {
        url: `services/active/${locale}`,
        domain: process.env.NEXT_PUBLIC_BASE_URL,
        method: "GET",
    });
};

export const fetchServiceGroups = async (): Promise<AxiosResponse> => {
    return await httpClient.post("", {
        url: `services/groups`,
        domain: process.env.NEXT_PUBLIC_BASE_URL,
        method: "GET",
    },{withCredentials: true,});
}

export const refillTbcAccount = async ({
                                           transactionCode,
                                           amount
                                       }: RefillTbc): Promise<AxiosResponse<RefillTbcResponse>> => {
    return await httpClient.post("", {
        url: `payment/transaction_relation_refill_debit_account/tbc`,
        domain: process.env.NEXT_PUBLIC_BASE_URL,
        method: "POST",
        data: {
            transactioncode: transactionCode,
            amount: amount,
            currency: "GEL",
            url_from: process.env.NEXT_PUBLIC_BASE_URL + "/service/payment"
        }
    })
}

export const confirmTransaction = async (transactionCode: string): Promise<AxiosResponse> => {
    return await httpClient.post("", {
        url: `payment/tbc/card/confrim/${btoa(transactionCode)}`,
        domain: process.env.NEXT_PUBLIC_BASE_URL,
        method: "GET"
    })
}