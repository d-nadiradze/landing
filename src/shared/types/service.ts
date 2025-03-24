import {Currency} from "./base";
import {ServiceStep} from "@/shared/enums";

export type AccountCurrencyType = {
    GEL: string,
    USD: string,
    EUR?: string
}


export type AccountType = {
    slug: string,
    accounts: AccountCurrencyType
    swiftCode: string
}

export type BankItem = {
    id: number,
    name?: string,
    logo?: string,
    accounts?: AccountType,
    rootBalance?: boolean,
    description?: string
}

export type LinkedCardType = {
    id?: number,
    name?: string,
    logo?: string,
    description?: string,
    type?: string,
    shortname?: Currency,
    rootBalance?: boolean,
    balance?: number
}

export type ServiceGroup = {
    id: number,
    description: string | null,
    image: string | null
}

export type Service = {
    CommissionRate: number;        // Rate of commission
    Currency: string;              // Currency (if applicable)
    Description: string;           // Description of the service
    ExchangeRate: number;          // Exchange rate (if applicable)
    GroupDescription: string;      // Description of the service group
    GroupID: number;               // ID of the service group
    ImgURL: string;                // URL to the service's image
    MaxAmount: number;             // Maximum amount allowed
    MinAmount: number;             // Minimum amount allowed
    MinCommission: number;         // Minimum commission
    Rounding: number;              // Rounding factor
    ServiceID: number;             // Unique identifier for the service
    ServiceType: string;           // Type of service (e.g., "Standard")
};

export type AuthorizedService = {
    id: number;
    serviceid: number;
    description: string;
    image: string;
    groupid: number;
    serviceGroup: ServiceGroup;
    paymerchant: string | null;
    paypassword: string | null;
    providerid: number;
    rounding: number;
    details: string;
    comment: string;
    sortingorder: number;
    commissionrate: number | null;
    mincommission: number | null;
    minamount: number | null;
    maxamount: number | null;
    country: string;
    is_secure: boolean | null;
    transactiontype: number;
    configproxyurl: string | null;
    additional_information: string | null;
}

export type ServiceParameterReference = {
    ID: number;
    Name: string;
    ParameterID: number;
    Value: string
}

export type ServiceParameter = {
    Description: string; // Description of the field
    ID: number;          // Unique identifier
    Mask: string;        // Regular expression for validation
    Name: string;        // Name of the field
    ServiceID: number;   // Associated service ID
    Tooltip: string;     // Tooltip description
    Type: string;        // Type of the field (e.g., "Text")
    Parameters?: {
        ParameterReference: ServiceParameterReference[]
    }
};


export type ServiceData = {
    service: Partial<Service>;
    serviceparameters: ServiceParameter[];
}

export type ServiceGeneralInfo = {
    key?: string,
    value?: string
}

export type ServiceFormData = {
    Key: string,
    Value: any,
    dateValue?: number
}

export type FormError = {
    [key: string]: string
}

export type PayList = {
    IsMultiselect: boolean,
    Caption: string,
    Parameters: PayListOption[]
}

export type PayListOption = {
    Key: string,
    Value: string,
    Amount: string | null,
    Currency: string | null
}

export type TransactionInfo = {
    amount: number;
    approvmentcode: number;
    check: string | null;
    comission: number;
    credit: {
        account: number;
        name: string;
        userid: number;
        verified: number;
    };
    currency: string;
    currency_abbr: string;
    date: string;
    debit: {
        account: number;
        name: string;
        userid: number;
        verified: number;
    };
    description: string;
    details: string;
    id: number;
    ip: string;
    is_secure: boolean;
    post_transaction_message: string | null;
    registration_date: string;
    status: 0 | 5 | 10 | -100;
    transaction_code: number;
    transaction_type: string;
    transaction_type_id: number;
    user_id: number;
    verification_code: number;
}

export type CheckServiceDetailModel = {
    data: ServiceData;
    pending: boolean;
    error: boolean;
}

export type CheckServiceDetailProps = {
    serviceId: number,
    lang: string
}

export type ServiceDetailForm = {
    fields: ServiceFormData[],
    errors: null | Record<string, string>,
    validated: boolean
}

export type ServiceGeneralInfoProps = {
    serviceId: number;
    formData: ServiceFormData[],
    serviceParameters: ServiceParameter[],
}

export type ServiceInfoResponse = {
    data: {
        GetServicePropertiesResult: {
            Code: number;
            ID: string;
            Message: string;
            SystemCode: string;
            Value: {
                Parameters: {
                    ServiceParameter: ServiceParameter[]
                },
                Property: Service
            }
        }
    }
}

export type CheckServiceParameter = {
    Key: string;
    Value: any
}

export type ServicePaymentModel = {
    validated: boolean,
    options: PayList | null,
    inputDisabled: boolean,
    selectedOptions: PayListOption[] | null,
    selectedPayment: LinkedCardType | null,
    amount: number | null,
    commission: number | null,
}

export type ServiceAdditionalInfoParam = {
    Key: string;
    Value: string;
}

export type ServiceAdditionalInfoResponse = {
    success: boolean;
    data: {
        GetInfoResult: {
            Code: number;
            ID: string;
            Message: string;
            SystemCode: string;
            Value: {
                Parameter: ServiceAdditionalInfoParam[];
            };
        };
    };
};

export type PayService = {
    formData: ServiceFormData[],
    transaction: string,
    serviceId: number,
    amount: number
}

type PayResult = {
    Code: number;
    ID: string;
    Message: string;
    SystemCode: string;
    Value: {
        Amount: number;
        Code: number;
        Currency: string;
        Description: string;
        ID: number;
        IP: string;
        Status: string;
        Type: string;
    };
};

export type PayRegisterResponse = {
    data: {
        PayResult: PayResult;
    };
    success: boolean;
};

export type TransactionData = {
    Amount: number;
    Code: number;
    Commission: number;
    Currency: string;
    Description: string;
    ID: number;
    IP: string;
    Status: string;
    Type: string;
}

export type ServiceModel = {
    step: ServiceStep,
    transactionCode: number | null,
    transactionInfo: TransactionData | null,
    orderId: string | null;
    error: number | null
}

type TransactionInfoType = {
    Code: number;
    ID: string;
    Message: string;
    SystemCode: string;
    Value: TransactionData;
};

export type TransactionInfoResponse = {
    data: {
        GetFullTransactionInfoResult: TransactionInfoType;
    };
    success: boolean;
};

export type RefillTbc = {
    transactionCode: number,
    amount: number
}

export type RefillTbcResponse = {
    order: string;
    transaction_code: number;
    transaction_id: number
}