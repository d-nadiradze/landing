// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    const requestedLocale = await requestLocale;

    const locale = hasLocale(routing.locales, requestedLocale)
        ? requestedLocale
        : routing.defaultLocale;

    const messages = {
        ...(await import(`../../messages/${locale}/home.json`)).default,
        ...(await import(`../../messages/${locale}/about-us.json`)).default,
        ...(await import(`../../messages/${locale}/cards.json`)).default,
        ...(await import(`../../messages/${locale}/coming-soon.json`)).default,
        ...(await import(`../../messages/${locale}/gambling.json`)).default,
        ...(await import(`../../messages/${locale}/services.json`)).default,
        ...(await import(`../../messages/${locale}/service.json`)).default,
        ...(await import(`../../messages/${locale}/layout-navigation.json`)).default,
        ...(await import(`../../messages/${locale}/errors.json`)).default // make sure it's .json!
    };

    return {
        locale,
        messages
    };
});
