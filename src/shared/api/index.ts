import axios from "axios";

export const httpClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PROXY_API_URL,
    withCredentials: true,
});

export const soapClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SOAP_API_URL
})

export * as api from "./api";
export * as soap from "./soap";
