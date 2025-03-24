
import {CheckServiceDetailProps, ServiceData, ServiceInfoResponse} from "@/shared/types";
import {AxiosError} from "axios";
import {soap} from "@/shared/api"

export const getServiceParameters = async (props: CheckServiceDetailProps): Promise<ServiceInfoResponse> => {
    try {
        return await soap.fetchServiceParameters(props.serviceId, props.lang);
    } catch (e) {
        if (e instanceof AxiosError) {
            throw e;
        }
        throw "Error on getting service parameters.";
    }
};