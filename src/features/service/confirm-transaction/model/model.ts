import {createGate} from "effector-react";
import {createEffect, sample} from "effector";
import {confirmTransactionApi} from "@/features/service/confirm-transaction"

export const ConfirmTransactionGate = createGate<string>()

const confirmTransactionFx = createEffect(confirmTransactionApi.confirmTransaction)

sample({
    clock: ConfirmTransactionGate.open,
    filter: (status: string) => {
        return sessionStorage.getItem("orderId") !== null && status === "success"
    },
    fn: () => sessionStorage.getItem("orderId") as string,
    target: confirmTransactionFx
})