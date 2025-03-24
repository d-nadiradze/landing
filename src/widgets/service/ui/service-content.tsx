'use client'

import { useGate, useUnit } from 'effector-react';
import { checkServiceDetailModel, ServiceDetailsForm } from '@/features/service/check-details';
import { serviceModel } from '@/widgets/service';
import { ServiceStep } from '@/shared/enums';
import { ServicePayment, servicePaymentFormModel } from '@/features/service/payment-form';
import { Locale } from '@/shared/intl';

type Props = {
    serviceId: string;
    locale: Locale;
};

export const ServiceContent = ({ serviceId, locale }: Props) => {
    useGate(checkServiceDetailModel.CheckServiceDetailGate, {
        serviceId: +serviceId,
        lang: locale,
    });

    useGate(serviceModel.ServiceGate);
    useGate(servicePaymentFormModel.PaymentFormGate);

    const { step } = useUnit(serviceModel.store);

    return (
        <>
            {step === ServiceStep.DetailsForm && <ServiceDetailsForm />}
            {step === ServiceStep.PaymentForm && <ServicePayment />}
        </>
    );
};
