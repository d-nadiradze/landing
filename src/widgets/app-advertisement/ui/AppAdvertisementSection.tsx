import React, {useState} from 'react';
import {Heading, Modal, SliderImage, SubHeader} from "@/shared/components";
import {AppAdvertisementSlider} from "@/features/app-advertisement";
import {appAdvertisementItems} from "@/shared/enums";
import {DownloadAppModal} from "@/features/download-app";
import {useTranslations} from "next-intl";
import {Button} from "@/shared/components/Button";


export const AppAdvertisementSection = () => {
    const [downloadModalActive, setDownloadModalActive] = useState<boolean>(false)
    const images = appAdvertisementItems()
    const t = useTranslations("Home.AppAdvertisement")
    return (
        <section className="!py-20 md:!py-24 flex flex-col items-center container">
            <div className="mb-[60px] md:mb-20 flex items-center flex-col">
                <Heading className={'md:block hidden max-w-[550px] text-center'}>{t("title")}</Heading>
                <Heading className={'block md:hidden max-w-[400px] text-center'}>{t("title")}</Heading>
                <SubHeader className={'max-w-none'}>{t("description")}</SubHeader>
            </div>
            <div className="hidden md:grid grid-cols-3 gap-x-10 relative">
                {images.map((image, index, ) => (
                    <React.Fragment key={index}>
                        <SliderImage key={index} active={true} src={image.src} alt={image.alt} width={image.width} height={image.height} />
                    </React.Fragment>
                ))}
            </div>

            <AppAdvertisementSlider/>

            <Button onClick={() => setDownloadModalActive(true)} className={'mt-14 !rounded-[10px] !px-6 !h-[51px]'}>{t("downloadApp")}</Button>

            <Modal isModalOpen={downloadModalActive} setIsModalOpen={setDownloadModalActive} className={'mt-20'}>
                <DownloadAppModal setIsModalOpen={setDownloadModalActive}/>
            </Modal>
        </section>
    );
};