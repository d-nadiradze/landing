import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    // All locales your app supports:
    locales: ['en', 'ka', 'ru'],
    // Default locale to use if no locale is detected
    defaultLocale: 'en'
});
