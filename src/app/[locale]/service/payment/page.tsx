"use client"
import React from 'react';
import {useSearchParams} from "next/navigation";
import {Failed, Success} from "@/features/status";
import {useGate} from "effector-react";
import { confirmTransactionModel } from '@/features/service/confirm-transaction';

const Page = () => {
    const params = useSearchParams()
    const result = params?.get("checkoutResult")
    useGate(confirmTransactionModel.ConfirmTransactionGate,result as string)
    return (
        <div className={'container mx-auto'}>
            {result === "error" &&
                <Failed>
                    Failed
                </Failed>
            }
            {result === "success" &&
                <Success title={"Finished"}>
                    Success
                </Success>
            }
        </div>
    );
};

export default Page;