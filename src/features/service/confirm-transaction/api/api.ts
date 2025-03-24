import {AxiosError} from "axios";
import {api} from "@/shared/api"

export const confirmTransaction = async (transactionCode: string) => {
    try {
        return await api.confirmTransaction(transactionCode);
    } catch (e) {
        if (e instanceof AxiosError) {
            throw e;
        }
        throw "Error on getting service parameters.";
    }
};