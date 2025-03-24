import {AxiosError} from "axios";
import {ServiceModel, TransactionData} from "@/shared/types";
import {api} from "@/shared/api"

export const refillTbcAccount = async (service: ServiceModel) => {
    try {
        const transactionInfo = service.transactionInfo as TransactionData;
        const response = await api.refillTbcAccount({
            transactionCode: service.transactionInfo?.Code as number,
            amount: transactionInfo.Amount + transactionInfo.Commission,
        });
        return response.data
    } catch (e) {
        if (e instanceof AxiosError) {
            throw e;
        }
        throw "Can't fetch services";
    }
}