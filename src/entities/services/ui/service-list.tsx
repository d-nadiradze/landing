import React, {useState} from 'react';
import {FilterSkeleton, Heading, ServiceCardSkeleton, SubHeader} from "@/shared/components";
import {ServiceCard, ServiceModel} from "@/entities/services";
import {useUnit} from "effector-react";
import {customGray, Device} from "@/shared/enums";
import {useViewport} from "@/shared/hooks";
import {ServiceGroup} from "@/shared/types";
import {Search, XIcon} from "lucide-react";
import {useField} from "effector-forms";
import {useTranslations} from "next-intl";
import {Button} from "@/shared/components/Button";

export const ServiceList = () => {
    const {filteredServices, serviceGroups, activeFilter, pending} = useUnit(ServiceModel.store)
    const {filterServices} = useUnit(ServiceModel.events)
    const {value, onChange} = useField(ServiceModel.form.searchServiceForm.fields.query)
    const [searchActive, setSearchActive] = useState<boolean>(false)
    const {deviceType} = useViewport()
    const t = useTranslations("Services.List")
    const initialDisplayCount = deviceType === Device.Mobile ? 4 : 16;
    const [displayCount, setDisplayCount] = useState(initialDisplayCount);
    const displayedServices = filteredServices?.slice(0, displayCount);
    const handleFilterClick = (id: number) => {
        filterServices(id)
        setDisplayCount(initialDisplayCount);
    }
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
        setDisplayCount(initialDisplayCount);
    };
    const loadMoreServices = () => {
        setDisplayCount((prev) => prev + initialDisplayCount);
    };

    return (
        <section id={'services'} className="w-full flex flex-col justify-center !my-24 container">
            <div className={'flex flex-col items-center justify-center mb-16'}>
                <Heading>{t("title")}</Heading>
                <SubHeader className={'max-w-[600px]'}>{t("description")}</SubHeader>
            </div>
            <div className="mb-5 flex items-center gap-x-4 overflow-x-auto justify-between">
                {
                    searchActive ?
                        <div
                            className="rounded-[37px] overflow-hidden flex w-full bg-custom-gray-bg py-[10px] px-3 mb-[21px] mt-[5px] items-center ">
                            <Search color={customGray} width={24} height={24}/>
                            <input
                                type="text"
                                value={value}
                                onChange={handleSearchChange}
                                className={"w-full focus:outline-none pl-2 bg-custom-gray-bg"}
                                placeholder={t("inputPlaceholder")}
                            />
                        </div>
                        :
                        pending ?
                            <>
                                {[...Array(7)].map((_, index) => (
                                    <FilterSkeleton key={index} />
                                ))}
                            </>
                            :
                            <div className="flex overflow-x-auto whitespace-nowrap custom-landing-scroll">
                                <div key={0}
                                     onClick={() => handleFilterClick(0)}
                                     className={`${activeFilter === 0 ? 'border-b-2 border-b-purple text-purple' : 'text-custom-black'} text-custom-black hover:border-b-2 hover:border-b-purple hover:text-purple transition-all text-sm pt-3.5 px-3 pb-4 mb-4 cursor-pointer`}>
                                    {t("all")}
                                </div>
                                {serviceGroups?.map((group: ServiceGroup) => (
                                    <div key={group.id}
                                         onClick={() => handleFilterClick(group.id)}
                                         className={`${activeFilter === group.id ? 'border-b-2 border-b-purple text-purple' : 'text-custom-black'} text-custom-black hover:border-b-2 hover:border-b-purple hover:text-purple transition-all text-sm pt-3.5 px-3 pb-4 mb-4 cursor-pointer`}>
                                        {group.description}
                                    </div>
                                ))}
                            </div>
                }

                <div onClick={() => setSearchActive(prevState => !prevState)}
                     className={`flex items-center justify-center p-2.5 ${!searchActive ? 'mb-4' : "mb-[21px] mt-[5px]"} bg-purple rounded-full cursor-pointer`}>
                    {
                        searchActive ?
                            <XIcon color={"white"} width={24} height={24}/>
                            :
                            <Search color={"white"} width={24} height={24}/>
                    }
                </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mb-16">
                {
                    pending ? (
                        Array.from({length: deviceType === Device.Mobile ? 4 : 16}).map((_, index) => (
                            <ServiceCardSkeleton key={index}/>
                        ))
                    ) : (
                        displayedServices?.map((service) => (
                            <ServiceCard
                                img={process.env.NEXT_PUBLIC_AMAZON_URL + '/img/services/regular-api/' + service.serviceid + '.png'}
                                serviceName={service.description}
                                key={service.id}
                                serviceId={service.serviceid}
                            />
                        ))
                    )
                }
            </div>
            {displayCount < (filteredServices?.length || 0) && (
                <div className="flex justify-center">
                    <Button className={"!rounded-[10px] !px-6 !h-[51px] mx-auto"} onClick={loadMoreServices}>
                        {t("loadServices")}
                    </Button>
                </div>
            )}
        </section>
    );
};