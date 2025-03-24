import {createEvent, createStore, sample} from "effector";

const submitSuccess = createEvent()
const clearSuccess = createEvent()

const $isSuccess = createStore<boolean>(false)
    .on(submitSuccess, () => true)

sample({
    source: $isSuccess,
    clock: clearSuccess,
    fn: (_) => false,
    target: $isSuccess
})

export const events = {submitSuccess, clearSuccess}

export const store = {
    isSuccess: $isSuccess
}