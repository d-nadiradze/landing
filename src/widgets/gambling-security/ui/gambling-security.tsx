import React from 'react';
import {Heading, SubHeader} from "@/shared/components";
import Image from "next/image";

export const GamblingSecurity = () => {
    return (
        <section className="container !py-24 bg-white flex flex-col">
            <div className="flex flex-col items-center">
                <Heading className={'max-w-[420px]'}>Maximum Security</Heading>
                <SubHeader className={'max-w-[650px]'}>Rest assured, Emoney keeps your payment information confidential.
                    Your cards and accounts are always secure and anonymous, with no sharing of your details with third
                    parties.</SubHeader>
            </div>
            <div className="mt-20 grid text-center grid-cols-3 gap-x-7">
                <div
                    className="bg-purple-secondary border border-custom-gray-border text-black rounded-xl pt-5 px-[25px] relative h-[500px] overflow-hidden">
                    <div className="relative z-10 flex flex-col items-center">
                        <p className="mt-4 text-[20px] font-bold">
                            Biometric Security Features
                        </p>
                    </div>
                    <Image
                        className="flex-shrink-0 w-full h-auto"
                        src="/images/security/shield.png"
                        alt="shield"
                        width={215}
                        height={215}
                    />
                    <p className={'max-w-[260px]'}>
                        Face ID and other advanced technologies, to safeguard your account. With these robust security
                        features in place, you can confidently access your gambling wallet knowing that only you have
                        authorized access.
                    </p>
                </div>

                <div
                    className="bg-purple-secondary border border-custom-gray-border text-black rounded-xl pt-5 px-[25px] relative h-[500px] overflow-hidden">
                    <div className="relative z-10 flex flex-col items-center">
                        <p className="mt-4 text-[20px] font-bold">
                            Protect Your Credit History
                        </p>
                    </div>
                    <Image
                        className="flex-shrink-0 w-full h-auto"
                        src="/images/security/chart.png"
                        alt="shield"
                        width={215}
                        height={215}
                    />
                    <p className={'max-w-[260px]'}>
                        It&#39;s always a good idea to keep your financial activities discreet. With Emoney, you can rest assured that your credit history remains secure, with no trails of gambling visible on your account.
                    </p>
                </div>

                <div
                    className="bg-purple-secondary border border-custom-gray-border text-black rounded-xl pt-5 px-[25px] relative h-[500px] overflow-hidden">
                    <div className="relative z-10 flex flex-col items-center">
                        <p className="mt-4 text-[20px] font-bold">
                            24/7 Security Assistance
                        </p>
                    </div>
                    <Image
                        className="flex-shrink-0 w-full h-auto"
                        src="/images/security/message.png"
                        alt="shield"
                        width={215}
                        height={215}
                    />
                    <p className={'max-w-[260px]'}>
                        Gain access to round-the-clock support in the event of any security incidents. We are dedicated to ensuring your peace of mind at all times. Our expert team is here to assist you whenever you need it.
                    </p>
                </div>
            </div>
        </section>
    );
};