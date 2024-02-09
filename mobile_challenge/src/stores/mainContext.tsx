import React, { useEffect, useState } from "react";
import { db } from "../database/firebase-config";
import { onValue, ref,  } from "firebase/database";

interface MainContextProps  {

}

interface ProviderProps {
    children: React.ReactNode
}

export const MainContext = React.createContext<MainContextProps>({});

function MainContextProvider({children}: ProviderProps) {


    useEffect(() => {
    }, [])

    const valueProvider = {

    }

    return (
        <MainContext.Provider value={valueProvider} >
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;