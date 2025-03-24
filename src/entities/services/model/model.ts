import {createEffect, createEvent, createStore, sample} from "effector";
import {AuthorizedService} from "@/shared/types";
import {getServiceGroups, getServices} from "..";
import {createForm} from "effector-forms";
import {Locale} from "@/shared/intl";

const $services = createStore<AuthorizedService[] | null>(null)
const $pending = createStore<boolean>(true)
const $error = createStore<Error | null>(null)
const $serviceGroups = createStore<any>(null)
const $serviceGroupsPending = createStore<boolean>(true)
const $serviceGroupsError = createStore<Error | null>(null)
const $activeFilter = createStore<number>(0)
const $filteredServices = createStore<AuthorizedService[] | null | undefined>(null)

const filterServices = createEvent<number>()
const fetchServices = createEvent<Locale>()
const fetchServicesFx = createEffect(getServices)
const fetchServiceGroups = createEvent()
const fetchServiceGroupsFx = createEffect(getServiceGroups)

const searchServiceForm = createForm({
    fields: {
        query: {
            init: ""
        }
    }
})

sample({
    source: fetchServices,
    target: fetchServicesFx
})

sample({
    source: fetchServicesFx.doneData,
    target: $services
})

sample({
    source: fetchServicesFx.doneData,
    target: $filteredServices
})

sample({
    source: fetchServicesFx.pending,
    target: $pending
})

sample({
    source: fetchServicesFx.failData,
    target: $error
})

sample({
    source: fetchServiceGroups,
    target: fetchServiceGroupsFx
})

sample({
    source: fetchServiceGroupsFx.doneData,
    target: $serviceGroups
})

sample({
    source: fetchServicesFx.failData,
    target: $serviceGroupsError
})

sample({
    source: fetchServicesFx.pending,
    target: $serviceGroupsPending
})

sample({
    source: filterServices,
    target: $activeFilter
})

sample({
    clock: [filterServices, searchServiceForm.fields.query.$value],
    source: {
        activeFilter: $activeFilter,
        services: $services,
        searchQuery: searchServiceForm.fields.query.$value,
    },
    fn: ({activeFilter, services, searchQuery}) => {
        let filteredServices: AuthorizedService[] | null | undefined = services;

        if (activeFilter !== 0) {
            filteredServices = services?.filter(service => service.groupid === activeFilter);
        }

        if (searchQuery) {
            filteredServices = filteredServices?.filter(service =>
                service.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filteredServices;
    },
    target: $filteredServices
})

export const store = {
    services: $services,
    pending: $pending,
    error: $error,
    serviceGroups: $serviceGroups,
    serviceGroupsPending: $serviceGroupsPending,
    serviceGroupsError: $error,
    activeFilter: $activeFilter,
    filteredServices: $filteredServices
}

export const events = {fetchServices, fetchServiceGroups, filterServices}

export const form = {searchServiceForm}