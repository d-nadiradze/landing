type Response = {
    data: any,
    pending: boolean,
    error: boolean
}
export const successResponseData = (data: any): Response => {
    return {
        data: data,
        pending: false,
        error: false
    }
}

export const errorResponseData = (data: any): Response => {
    return {
        data: data,
        pending: false,
        error: true
    }
}