"use client"
import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {Notification} from "@/shared/components";
import {AnimatePresence} from "framer-motion";

type NotificationContextState = {
    message: string | number,
    setMessage: React.Dispatch<React.SetStateAction<string | number>>
    type: 'error' | 'success'
    setType: React.Dispatch<React.SetStateAction<'error' | 'success'>>
}

const NotificationContext = createContext<NotificationContextState | undefined>(undefined)

type NotificationProviderProps = {
    children: ReactNode
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({children}) => {
    const [message, setMessage] = useState<string | number>("")
    const [type, setType] = useState<'error' | 'success'>("success")

    useEffect(() => {
        if (message) {
            setTimeout(() => {
                setMessage("")
            },3000)
        }
    }, [message]);

    return (
        <NotificationContext.Provider value={{message, setMessage, type, setType}}>
            <AnimatePresence mode={"wait"}>
            {
                message && <Notification message={message} type={type}/>
            }
            </AnimatePresence>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = (): NotificationContextState => {
    const context = useContext(NotificationContext)
    if (!context){
        throw new Error('useNotification must be used within a NotificationProvider');
    }

    return context
}
