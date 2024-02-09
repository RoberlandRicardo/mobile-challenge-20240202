import { NavigationContainer } from "@react-navigation/native";
import PrivateScreens from "./routes/privateScreens";
import MainContextProvider from "./stores/mainContext";
import { useEffect } from "react";
import InternalDatabase from "./database/database";

export default function App () {

    useEffect(() => {
        InternalDatabase.initDB();
        // InternalDatabase.dropDatabase();
    }, [])

    return (
        <NavigationContainer>
            <MainContextProvider>
                <PrivateScreens />
            </MainContextProvider>
        </NavigationContainer>
    )
}

