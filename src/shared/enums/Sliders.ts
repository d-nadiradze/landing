export const p2pAdvertisementItems = () => {
    return [
        {
            title: 'bankTransfer',
            description: 'bankTransferDesc',
            imageSrc: '/images/app/bank-transfer/screen-3.png',
            imageAlt: 'Bank Transfer',
            imageWidth: 300,
            imageHeight: 500,
            isImageBottom: true
        },
        {
            title: 'linkedCards',
            description: 'linkedCardsDesc',
            imageSrc: '/images/app/bank-transfer/screen-2.png',
            imageAlt: 'Linked Cards',
            imageWidth: 300,
            imageHeight: 600,
            isImageBottom: false
        },
        {
            title: 'phoneNumber',
            description: 'phoneNumberDesc',
            imageSrc: '/images/app/bank-transfer/screen-3.png',
            imageAlt: 'Phone Number',
            imageWidth: 300,
            imageHeight: 500,
            isImageBottom: true
        }
    ];
}

export const cardSecurityFeatureItems = () => {
    return [
        {
            iconSrc: '/images/icons/lock.svg',
            iconAlt: 'lock',
            description: 'freezeUnfreeze',
            imageSrc: '/images/phone/card-frozen.png',
            imageAlt: 'card frozen',
            imageWidth: 300,
            imageHeight: 500,
            isImageBottom: true
        },
        {
            iconSrc: '/images/icons/gambling.svg',
            iconAlt: 'gambling',
            description: 'restrictGambling',
            imageSrc: '/images/phone/security-2.png',
            imageAlt: 'security feature 2',
            imageWidth: 300,
            imageHeight: 600,
            isImageBottom: false
        },
        {
            iconSrc: '/images/icons/card.svg',
            iconAlt: 'card',
            description: 'onlineShopping',
            imageSrc: '/images/phone/security-3.png',
            imageAlt: 'security feature 3',
            imageWidth: 300,
            imageHeight: 500,
            isImageBottom: true
        }
    ];
}

export const serviceAdvertisementItems = () => {
    return [
        {
            translationKey: 'accessMultipleServices',
            imageSrc: '/images/services-banner-1.png',
            imageAlt: 'bank transfer',
            imageWidth: 300,
            imageHeight: 500,
            isImageBottom: true
        },
        {
            translationKey: 'unlimitedCards',
            imageSrc: '/images/services-banner-2.png',
            imageAlt: 'bank transfer',
            imageWidth: 300,
            imageHeight: 600,
            isImageBottom: false
        },
        {
            translationKey: 'unlimitedTemplates',
            imageSrc: '/images/services-banner-3.png',
            imageAlt: 'bank transfer',
            imageWidth: 300,
            imageHeight: 500,
            isImageBottom: true
        }
    ]
}

export const bundleItems = () => {
    return [
        {
            mostPopular: false,
            category: "Standard",
            pricePerMonth: "7.00₾",
            bonusCard: "0",
            atmWithdrawalLimit: "5,000₾",
            purchaseLimit: "30,000₾",
            utilityPaymentsFee: "0.50₾"
        },
        {
            mostPopular: true,
            category: "Smart",
            pricePerMonth: "15.00₾",
            bonusCard: "1",
            atmWithdrawalLimit: "10,000₾",
            purchaseLimit: "100,000₾",
            utilityPaymentsFee: "0.50₾"
        },
        {
            mostPopular: false,
            category: "Premium",
            pricePerMonth: "35.00₾",
            bonusCard: "2",
            atmWithdrawalLimit: "40,000₾",
            purchaseLimit: "150,000₾",
            utilityPaymentsFee: "0₾"
        }
    ]
}

export const appAdvertisementItems = () => {
    return [
        { src: '/images/app/screen-1.svg', alt: 'Emoney new app - screen 1', width: 320, height: 1127 },
        { src: '/images/app/screen-2.svg', alt: 'Emoney new app - screen 2', width: 320, height: 1127 },
        { src: '/images/app/screen-3.svg', alt: 'Emoney new app - screen 3', width: 320, height: 1127 },
    ]
}