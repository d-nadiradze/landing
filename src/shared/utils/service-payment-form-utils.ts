import {LinkedCardType, PayList, PayListOption} from "@/shared/types";

export const calculateCommission = (amount: number, commissionRate?: number | null, minCommission?: number | null) => {
    let commission;
    if (commissionRate) {
        if (minCommission) {
            if ((commissionRate * amount) < minCommission) {
                commission = minCommission / 100
            }
        }
        commission = (commissionRate * amount) / 100
        return +commission.toFixed(2)
    }
    return 0
}

export const paymentFormValidated = (
    amount: number | null,
    selectedOptions: PayListOption[] | null,
    options: PayList | null
) => {
    if (
        amount === null
        ||
        (options !== null && !selectedOptions?.length)
    ) {
        return false
    }
    return amount > 0
}

export const updateSelectOptions = (selectedOptions: PayListOption[], option: PayListOption, options: PayList) => {
    if (selectedOptions) {
        const optionExists = selectedOptions.find(selectedOption => selectedOption === option)
        if (optionExists) {
            return selectedOptions.filter(selectedOption => selectedOption !== option)
        }
        if (options?.IsMultiselect) {
            return [...selectedOptions, option]
        }
    }
    return [option]
}

export const calculateAmountByOption = (options: PayList, updatedOptions: PayListOption[]) => {
    return options?.Parameters.filter(parameter => {
        return updatedOptions.find(updateOption => updateOption === parameter)
    }).reduce((a, b) => {
        return a + (b.Amount as unknown as number)
    }, 0)
}

export const updateSelectOption = (
    selectedOptions: PayListOption[] | null,
    option: PayListOption,
    options: PayList | null,
    selectedPayment: LinkedCardType | null,
    commissionRate?: number | null,
    minCommission?: number | null,
) => {
    const updatedOptions = updateSelectOptions(
        selectedOptions as PayListOption[],
        option,
        options as PayList
    )
    let updatedInfo: {
        selectedOptions: PayListOption[],
        amount?: number,
        commission?: number
    } = {
        selectedOptions: updatedOptions
    }
    let amount = 0;
    if (options?.Parameters[0].Amount) {
        amount = calculateAmountByOption(options, updatedOptions)
        const calculatedCommission = calculateCommission(
            amount,
            commissionRate,
            minCommission
        )
        updatedInfo = {
            ...updatedInfo,
            amount: +amount.toFixed(2),
            commission: +calculatedCommission.toFixed(2)
        }
    }
    return updatedInfo
}

export const generateUniqueId = (prefix: string = 'payemn',moreEntropy = true): string => {
    const base = Date.now().toString(16); // Hexadecimal timestamp
    const random = Math.random().toString(16).slice(2); // Random hex string

    let result = `${prefix}${base}${random}`;

    if (moreEntropy) {
        // Add more entropy: extra randomness with precise timing
        const extraEntropy = Math.random().toString(16).slice(2) + performance.now().toString(16).replace('.', '');
        result += extraEntropy;
    }

    return result;
};
