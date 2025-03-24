import {
    BankItem, CheckServiceParameter,
    FormError,
    ServiceFormData,
    ServiceParameter,
    ServiceParameterReference
} from "@/shared/types";
import {
    FIRST_STEP_EXCLUDED_FIELDS,
    FIRST_STEP_VALIDATED_FIELD_TYPES,
    SECOND_STEP_FIELDS,
    ServiceFormFields
} from "@/shared/enums";

export const initializeForm = (serviceParameters: ServiceParameter[]) => {
    const defaultAnswers: ServiceFormData[] = []
    serviceParameters.forEach(serviceParameterItem => {
        if (serviceParameterItem.Type === ServiceFormFields.Dropdown) {
            defaultAnswers.push({
                Key: serviceParameterItem.Name,
                Value: serviceParameterItem.Parameters ? serviceParameterItem.Parameters.ParameterReference[0].ID : ''
            })
        }
        if (serviceParameterItem.Type === ServiceFormFields.HiddenDefaultValue) {
            defaultAnswers.push({
                Key: serviceParameterItem.Name,
                Value: serviceParameterItem.Description
            })
        }
    })
    return defaultAnswers
}


export const getFirstStepFields = (serviceParameters: ServiceParameter[]) => {
    return serviceParameters?.filter(serviceParameter => !FIRST_STEP_EXCLUDED_FIELDS.includes(serviceParameter.Type))
}

export const serviceFieldOptionsMapper = (options: ServiceParameterReference[]) => {
    return options.map(option => {
        return {
            id: option.ID,
            name: option.Name
        }
    })
}

export const updateFormDataValues = (previousValues: ServiceFormData[], field: ServiceFormData) => {
    if (previousValues.find(previousValue => previousValue.Key === field.Key)) {
        return [
            ...previousValues.filter(previousValueItem => previousValueItem.Key !== field.Key),
            field
        ]
    }
    return [
        ...previousValues,
        field
    ]
}

const validationFields = (serviceParameters: ServiceParameter[]) => {
    return serviceParameters.filter(serviceParameter => {
        return FIRST_STEP_VALIDATED_FIELD_TYPES.includes(
            serviceParameter.Type
        )
    })
}
export const readyForCheckService = (formData: ServiceFormData[], serviceParameters: ServiceParameter[], field: ServiceFormData) => {
    let ready = true;
    const updatedFormData = updateFormDataValues(formData, field)
    const fields = validationFields(serviceParameters)
    fields.forEach(serviceParameter => {
        const formDataItem = updatedFormData.find(formItem => formItem.Key === serviceParameter.Name)
        if (!formDataItem || formDataItem?.Value?.length === 0) {
            ready = false
        }
    })
    return ready;
}

export const findServiceParameterByName = (serviceParameters: ServiceParameter[], name: string) => {
    return serviceParameters
        .find(serviceParameter => {
            return serviceParameter.Name === name
        })
}

export const updateFormDataValue = (
    serviceParameters: ServiceParameter[],
    formData: ServiceFormData[],
    field: ServiceFormData) => {
    const validated = readyForCheckService(
        formData,
        serviceParameters,
        field
    )
    return {
        fields: updateFormDataValues(formData, field),
        validated: validated,
        errors: null
    }
}

export const getSelectedOption = (options: BankItem[], serviceParameter: ServiceParameter, formData: ServiceFormData[]) => {
    return options.find(option => option.id == formData.find(item => item.Key === serviceParameter.Name)?.Value) as BankItem
}

export const validateField = (value: string, validation?: string) => {
    if (validation) {
        const regex = new RegExp(validation);
        return regex.test(value);
    }
    return true
}

export const formValidator = (formData: ServiceFormData[], serviceParameters: ServiceParameter[]) => {
    const formErrors: FormError = {}
    formData.forEach(formItem => {
        const serviceParameter = findServiceParameterByName(serviceParameters, formItem.Key)
        if (serviceParameter?.Mask) {
            if (!validateField(formItem.Value, serviceParameter.Mask)) {
                formErrors[formItem.Key] = `${serviceParameter.Description} format is wrong`
            }
        }
    })
    const validated = Object.keys(formErrors).length === 0
    return {
        validated: validated,
        errors: formErrors
    }
}

export const checkServiceFormDataMapper = (formData: ServiceFormData[], serviceId: number, serviceParameters?: ServiceParameter[]) => {
    const updatedFormData: CheckServiceParameter[] = formData.map(formItem => {
        return {
            Key: formItem.Key,
            Value: formItem.Value
        }
    })
    if (serviceParameters) {
        serviceParameters.forEach(serviceParameter => {
            if (SECOND_STEP_FIELDS.includes(serviceParameter.Type)) {
                updatedFormData.push({
                    Key: serviceParameter.Name,
                    Value: serviceParameter.Description
                })
            }
        })
    }
    return [
        ...updatedFormData,
        {
            Key: 'service',
            Value: serviceId
        },
        {
            Key: 'currency',
            Value: 'GEL'
        }
    ]
}