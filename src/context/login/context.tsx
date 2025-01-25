"use client"
import { createContext } from "react";

export interface IAuthData {
    islogin: boolean
    update?: (props:IAuthData) => void
}

export const Auth_Data = createContext<IAuthData | undefined>(undefined)