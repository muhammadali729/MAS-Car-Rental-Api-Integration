"use client"
import { ReactNode, useState } from "react"
import { Auth_Data, IAuthData} from "./context"

export const LoginProvider =({children}:{children:ReactNode}) =>{
    const [context, setContext] =useState <IAuthData>()
    const data:IAuthData ={
        islogin:true,
        update:(props:IAuthData)=>{
            data.islogin =props.islogin
        }
    }
    return (
        <Auth_Data.Provider   value={context}>
            {children}
        </Auth_Data.Provider>
    )
}