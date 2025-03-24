import React, {useState} from 'react';
import Image from "next/image";
import {Heading, Modal, SubHeader} from "@/shared/components";
import {DownloadAppModal} from "@/features/download-app";
import {useTranslations} from "next-intl";
import {Button} from "@/shared/components/Button";

export const RevolutionizeSpending = () => {
    const [downloadModalActive, setDownloadModalActive] = useState<boolean>(false)
    const t = useTranslations("Cards.RevolutionizeSpending")
    return (
        <section className="section flex md:flex-row flex-col justify-center !py-14">
            <div className={'order-2 md:order-1 relative flex justify-center items-center'}>
                <Image src={'/images/phone/mockup.svg'} priority alt={'card'} width={301} height={732}
                       className="w-[520px] h-auto flex-shrink-0 z-20"/>
                <div className="absolute bottom-0 w-full z-50 h-[70px] bg-gradient-to-b from-transparent to-white"/>
            </div>
            <div className={'order-1 md:order-2 flex flex-col items-center md:items-start justify-center'}>
                <Heading className="md:max-w-[580px] max-w-[345px] md:!text-left" animate={false}>
                    {t("title")}
                </Heading>
                <SubHeader className={'hidden md:block !text-left max-w-[580px]'} animate={false}>{t("description")}</SubHeader>
                <Button className={'!hidden md:!block mt-[60px] !rounded-[10px] !px-6 !h-[51px]'} onClick={() => setDownloadModalActive(true)}>{t("downloadApp")}</Button>
            </div>

            <div className={'flex flex-col order-3 md:hidden items-center justify-center mt-10'}>
                <SubHeader className={'block md:hidden max-w-[345px]'} animate={false}>{t("description")}</SubHeader>
                <Button className={'!block md:!hidden mt-10 !rounded-[10px] !px-6 !h-[51px]'} onClick={() => setDownloadModalActive(true)}>{t("downloadApp")}</Button>
            </div>

            <Modal isModalOpen={downloadModalActive} setIsModalOpen={setDownloadModalActive} className={'md:relative absolute bottom-0 md:rounded-none rounded-t-lg mt-20'}>
                <DownloadAppModal setIsModalOpen={setDownloadModalActive}/>
            </Modal>
        </section>
    );
};