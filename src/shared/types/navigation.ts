export type NavLinkType = {
    id: number,
    text: string,
    url: string,
    subNav: SubNavType[]
}

export type SubNavType = {
    text: string,
    url: string,
}
