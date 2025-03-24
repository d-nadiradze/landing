import React from 'react';
import Image from "next/image";
import {XIcon} from "lucide-react";
import Link from "next/link";
import {useTranslations} from "next-intl";

type DownloadAppModalProps = {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DownloadAppModal: React.FC<DownloadAppModalProps> = ({setIsModalOpen}) => {
    const t = useTranslations("Home.AppAdvertisement.DownloadApp")
    return (
        <div className={'flex flex-col justify-center items-center'}>
            <div className={'flex items-center justify-center mb-10 relative w-full'}>
                {/*<EmoneyIcon width={100}/>*/}
                <XIcon width={20} className={'absolute right-0 cursor-pointer'} onClick={() => setIsModalOpen(false)}/>
            </div>
            <div className={'flex items-center justify-center rounded-xl'}>
                <Image src="/images/app/qr.png" alt="App QR" width={200} height={200} />
            </div>
            <h3 className={'mt-10 text-2xl font-bold max-w-[240px] text-center'}>{t('title')}</h3>
            <p className={'mt-6 max-w-[400px] text-center'}>{t("description")}</p>
            <div className={'mt-10 flex items-center justify-center gap-x-4'}>
                <Link href={'https://getapp.emoney.ge/download'}>
                    {/*<AppStoreIcon width={120} height={40}/>*/}
                </Link>
                <Link href={'https://getapp.emoney.ge/download'}>
                    {/*<GooglePlayIcon width={120} height={40}/>*/}
                </Link>
            </div>
        </div>
    );
};