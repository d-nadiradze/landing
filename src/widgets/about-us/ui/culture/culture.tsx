import React from 'react';
import {motion} from "framer-motion";
import {Heading, SubHeader} from "@/shared/components";
import {Flag, Lightbulb, Pointer, Sparkles} from "lucide-react";
import {CultureSlider} from "@/features/our-culture";
import {useTranslations} from "next-intl";

export const Culture = () => {
    const t = useTranslations("AboutUs.Culture")
    return (
        <motion.section className="md:!py-24 !py-20 container flex flex-col items-center justify-center">
            <Heading>{t("title")}</Heading>
            <SubHeader className={'max-w-[650px]'}>
                {t("description")}
            </SubHeader>
            <div className={'hidden md:grid grid-cols-3 w-full gap-x-7 mt-20'}>
                <motion.div
                    className={'py-8 bg-black rounded-lg flex flex-col items-center justify-center'}
                    whileHover="hover"
                    initial="rest"
                >
                    <motion.div
                        className={'flex flex-col items-center justify-center gap-y-3'}
                        variants={{
                            rest: {y: 150},
                            hover: {y: 0}
                        }}
                        transition={{duration: 0.3}}
                    >
                        <Sparkles width={24} height={24} color={'white'}/>
                        <p className={'text-white text-xl'}>{t("brilliance")}</p>
                    </motion.div>
                    <motion.p
                        className={'text-white max-w-[222px] text-center pt-8'}
                        variants={{
                            rest: {opacity: 0, y: 100},
                            hover: {opacity: 1, y: 0}
                        }}
                        transition={{duration: 0.3}}
                    >
                        {t("brillianceText")}
                    </motion.p>

                    <motion.div
                        className={'flex flex-col items-center justify-center'}
                        variants={{
                            rest: {opacity: 1},
                            hover: {opacity: 0}
                        }}
                    >
                        <Pointer color={'#8E8EA4'} width={16} height={16}/>
                        <p className={'text-secondary-text text-sm'}>{t("hoverMoreInfo")}</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={'py-8 bg-black rounded-lg flex flex-col items-center justify-center'}
                    whileHover="hover"
                    initial="rest"
                >
                    <motion.div
                        className={'flex flex-col items-center justify-center gap-y-3'}
                        variants={{
                            rest: {y: 150},
                            hover: {y: 0}
                        }}
                        transition={{duration: 0.3}}
                    >
                        <Lightbulb width={24} height={24} color={'white'}/>
                        <p className={'text-white text-xl'}>{t("curiosity")}</p>
                    </motion.div>
                    <motion.p
                        className={'text-white max-w-[222px] text-center pt-8'}
                        variants={{
                            rest: {opacity: 0, y: 100},
                            hover: {opacity: 1, y: 0}
                        }}
                        transition={{duration: 0.3}}
                    >
                        {t("curiosityText")}
                    </motion.p>

                    <motion.div
                        className={'flex flex-col items-center justify-center'}
                        variants={{
                            rest: {opacity: 1},
                            hover: {opacity: 0}
                        }}
                    >
                        <Pointer color={'#8E8EA4'} width={16} height={16}/>
                        <p className={'text-secondary-text text-sm'}>{t("hoverMoreInfo")}</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={'py-8 bg-black rounded-lg flex flex-col items-center justify-center'}
                    whileHover="hover"
                    initial="rest"
                >
                    <motion.div
                        className={'flex flex-col items-center justify-center gap-y-3'}
                        variants={{
                            rest: {y: 150},
                            hover: {y: 0}
                        }}
                        transition={{duration: 0.3}}
                    >
                        <Flag width={24} height={24} color={'white'}/>
                        <p className={'text-white text-xl'}>{t("destination")}</p>
                    </motion.div>
                    <motion.p
                        className={'text-white max-w-[222px] text-center pt-8'}
                        variants={{
                            rest: {opacity: 0, y: 100},
                            hover: {opacity: 1, y: 0}
                        }}
                        transition={{duration: 0.3}}
                    >
                        {t("destinationText")}
                    </motion.p>

                    <motion.div
                        className={'flex flex-col items-center justify-center'}
                        variants={{
                            rest: {opacity: 1},
                            hover: {opacity: 0}
                        }}
                    >
                        <Pointer color={'#8E8EA4'} width={16} height={16}/>
                        <p className={'text-secondary-text text-sm'}>{t("hoverMoreInfo")}</p>
                    </motion.div>
                </motion.div>
            </div>

            <CultureSlider/>
        </motion.section>
    );
};
