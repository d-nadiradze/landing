import { NextIntlClientProvider } from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import '../globals.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import {Footer, Navbar} from "@/shared/components";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Emoney | Freedom for all your money",
    description: "ელექტრონული საფულე და ონლაინ გადახდები",
    icons: "/images/icons/logo.webp",
};
export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
    const locale = await getLocale();

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            {children}
            <Footer />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}

export async function generateStaticParams() {
    const locales = routing.locales;

    return locales.map((loc) => ({ locale: loc }));
}