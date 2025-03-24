import {PayService, PayRegisterResponse} from "@/shared/types";
import {AxiosError} from "axios";
import {soap} from "@/shared/api"

export const registerPayment = async (props: PayService): Promise<PayRegisterResponse> => {
    try {
        return await soap.registerPayment(props);
    } catch (e) {
        if (e instanceof AxiosError) {
            throw e;
        }
        throw "Error on getting service parameters.";
    }
};