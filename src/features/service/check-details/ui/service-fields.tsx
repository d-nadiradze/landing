"use client"

import React from 'react';
import {useUnit} from "effector-react";
import {ServiceParameter, ServiceParameterReference} from "@/shared/types";
import {ServiceFormFields} from "@/shared/enums";
import {CustomInput, customSelect, customDatePicker} from "@/shared/ui/fields";
import {formatDateForBack} from "@/shared/utils";
import moment from "moment";
import {TextSkeleton} from "@/shared/ui/skeletons";
import {checkServiceDetailModel} from "@/features/service/check-details"
import {checkServiceDetailUtils} from "@/shared/utils"

export const ServiceFields = () => {
    const {fields, errors} = useUnit(checkServiceDetailModel.form);
    const {data, pending} = useUnit(checkServiceDetailModel.store);
    const {updatedFormData} = useUnit(checkServiceDetailModel.events);
    const renderField = (serviceParameter: ServiceParameter) => {
        switch (serviceParameter.Type) {
            case ServiceFormFields.Text:
                return (
                    <CustomInput
                        label={serviceParameter.Description}
                        name={serviceParameter.Name}
                        callback={(value) =>
                            updatedFormData({
                                Key: serviceParameter.Name,
                                Value: value
                            })
                        }
                        errors={errors ? errors[serviceParameter.Name] : null}
                        value={fields.find(item => item.Key === serviceParameter.Name)?.Value}
                    />
                );
            case ServiceFormFields.OptionalText:
                return (
                    <CustomInput
                        label={serviceParameter.Description}
                        name={serviceParameter.Name}
                        value={fields.find(item => item.Key === serviceParameter.Name)?.Value}
                        callback={(value) =>
                            updatedFormData({
                                Key: serviceParameter.Name,
                                Value: value
                            })
                        }
                        errors={errors ? errors[serviceParameter.Name] : null}
                    />
                );
            case ServiceFormFields.Dropdown:
                const options = checkServiceDetailUtils.serviceFieldOptionsMapper(serviceParameter.Parameters?.ParameterReference as ServiceParameterReference[]);
                const selectedOption = checkServiceDetailUtils.getSelectedOption(options, serviceParameter, fields);
                return (
                    <customSelect.PaymentSelect
                        options={options}
                        selectedOption={selectedOption}
                        setSelectedOption={(option) => {
                            updatedFormData({
                                Key: serviceParameter.Name,
                                Value: option?.id
                            });
                        }}
                        classNames={'bg-custom-gray-bg p-4 rounded-[8px]'}
                    />
                );
            case ServiceFormFields.DateTime:
                const fieldValue = fields.find(item => item.Key === serviceParameter.Name);
                const value = fieldValue ? fieldValue.dateValue : '';
                return (
                    <customDatePicker.CustomDatePicker
                        value={value ? formatDateForBack(value) : ''}
                        name={serviceParameter.Name}
                        label={serviceParameter.Description}
                        labelCentered={value === ''}
                        onChange={(date) =>
                            updatedFormData({
                                Key: serviceParameter.Name,
                                dateValue: date?.getTime(),
                                Value: moment(date?.getTime()).format('DD.MM.YYYY')
                            })
                        }
                        minYear={1940}
                        errors={errors ? errors[serviceParameter.Name] : undefined}
                    />
                );
        }
    };

    if (pending) {
        return (
            <div className={'flex flex-col gap-y-2'}>
                <TextSkeleton className={'w-full h-12'}/>
                <TextSkeleton className={'w-full h-12'}/>
                <TextSkeleton className={'w-full h-12'}/>
            </div>
        )
    }

    return (
        <>
            {checkServiceDetailUtils.getFirstStepFields(data.serviceparameters)?.map(serviceParameter => {
                return renderField(serviceParameter);
            })}
        </>
    );
};
