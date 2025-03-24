import {createEvent, createStore} from "effector";

const submitFailed = createEvent()

const $isFailed = createStore<boolean>(false)
    .on(submitFailed, () => true)

export const events = {submitFailed}

export const store = {
    isFailed: $isFailed
}