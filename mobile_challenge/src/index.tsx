import { NavigationContainer } from "@react-navigation/native";
import PrivateScreens from "./routes/privateScreens";

export default function App () {
    return (
        <NavigationContainer>
            <PrivateScreens />
        </NavigationContainer>
    )
}

