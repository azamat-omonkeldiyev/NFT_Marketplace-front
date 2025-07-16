"use client"
import { ArtistType } from "@/@types/ArtistType";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


export const Context = createContext<{
    singleArtistData:ArtistType | {},
    setSingleAritstData:Dispatch<SetStateAction<ArtistType>>
}>({
    singleArtistData:{},
    setSingleAritstData:() => null
})

export const GlobalContext = ({children}:{children:ReactNode}) => {
    const [singleArtistData, setSingleAritstData] = useState<ArtistType | {}>({})

    return <Context.Provider value={{setSingleAritstData, singleArtistData}}>{children}</Context.Provider>
}