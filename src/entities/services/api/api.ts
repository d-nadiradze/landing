import { api } from "@/shared/api";
import {AuthorizedService, ServiceGroup} from "@/shared/types";
import {AxiosError} from "axios";
import {Locale} from "@/shared/intl";

export const getServices = async (locale: Locale): Promise<AuthorizedService[]> => {
    try {
        const response = await api.fetchServices(locale);
        return response.data
    } catch (e) {
        if (e instanceof AxiosError) {
            throw e;
        }
        throw "Can't fetch services";
    }
};

export const getServiceGroups = async (): Promise<ServiceGroup[]> => {
    try {
        const response = await api.fetchServiceGroups();
        return response.data
    } catch (e) {
        if (e instanceof AxiosError) {
            throw e;
        }
        throw "Can't fetch service groups";
    }
}