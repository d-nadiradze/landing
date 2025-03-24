import {createGate} from "effector-react";
import {sample} from "effector";
import { ServiceModel } from "..";
import {Locale} from "@/shared/intl";

export const ServiceGate = createGate<Locale>()

sample({
    source: ServiceGate.open,
    target: ServiceModel.events.fetchServices
})

sample({
    source: ServiceGate.open,
    target: ServiceModel.events.fetchServiceGroups
})