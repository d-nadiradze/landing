import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
    img: string;
    serviceName?: string;
    className?: string;
    serviceId: number;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({img, serviceName, className, serviceId}) => {
    const [imageSrc, setImageSrc] = useState(img);
    const placeholderImg = '/images/placeholder.svg';

    return (
        <Link href={`/service/${serviceId}`}>
            <div
                className={`cursor-pointer border border-custom-gray-border rounded-[10px] flex flex-col flex-1 p-5 ${className} h-[156px]`}>
                <div className="flex items-center justify-center h-1/2">
                    <Image
                        src={imageSrc}
                        className="rounded-md block w-auto md:w-full h-[52px] md:h-auto object-cover md:max-w-[52px]"
                        alt={serviceName ?? ""}
                        sizes="100vw"
                        width={52}
                        height={52}
                        onError={() => setImageSrc(placeholderImg)}
                        quality={70}
                    />
                </div>
                <div className="h-1/2 flex items-end justify-center">
                    <p className={`text-sm truncate text-center`}>{serviceName}</p>
                </div>
            </div>
        </Link>
    );
};