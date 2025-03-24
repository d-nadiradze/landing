import Image from "next/image";
import React from "react";
import { BankItem,LinkedCardType } from "@/shared/types";

type LinkedCardItemPropsType = {
    linkedCard: LinkedCardType | BankItem | null;
    details?: "card" | "other" | "none";
};

export const LinkedCardItem: React.FC<LinkedCardItemPropsType> = ({ linkedCard, details }) => {

    if (!linkedCard) {
        return <div className="text-center text-sm text-gray-500">Select</div>;
    }

    return (
        <div className="flex items-center gap-x-3">
            {linkedCard.logo ? (
                <Image
                    className={"rounded-[8px]"}
                    src={linkedCard.logo}
                    width={32}
                    height={32}
                    alt={`${linkedCard.name} logo`}
                />
            ) : (
                <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-purple-secondary">
                    {/*<CardIcon />*/}
                </div>
            )}
            <div>
                <p className={"text-sm"}>
                    {linkedCard?.name === "NaN" ? "Bank account" : linkedCard?.name}
                </p>
                {details && details !== "none" && linkedCard?.id !== 1 && (
                    <div className="flex gap-x-2 items-center text-custom-gray-text text-[12px]">
                        <p>
                            {linkedCard && "type" in linkedCard ? linkedCard?.type : ""}
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};
