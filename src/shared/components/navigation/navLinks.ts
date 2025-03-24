import { NavLinkType } from "@/shared/types";

export const navLink: NavLinkType[] = [
    {
        id: 0,
        text: "personal",
        url: "",
        subNav: [
            {
                text: "cards",
                url: "cards",
            },
            {
                text: "payments",
                url: "services",
            },
            {
                text: "gamblingWallet",
                url: "gambling",
            },
        ],
    },
    {
        id: 1,
        text: "business",
        url: "",
        subNav: [
            {
                text: "deals",
                url: "coming-soon",
            },
            {
                text: "partners",
                url: "coming-soon",
            },
        ],
    },
    {
        id: 2,
        text: "company",
        url: "",
        subNav: [
            {
                text: "aboutUs",
                url: "about-us",
            },
            {
                text: "workingAtEmoney",
                url: "coming-soon",
            },
        ],
    },
    {
        id: 3,
        text: "newsRoom",
        url: "",
        subNav: [
            {
                text: "latestNews",
                url: "coming-soon",
            },
        ],
    },
];
