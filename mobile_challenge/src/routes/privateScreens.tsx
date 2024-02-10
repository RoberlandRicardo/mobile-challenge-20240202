import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import DetailsWord from "../screens/DetailsWord";
import { WordDetails } from "../@types/entities";
import HomeContextProvider from "../stores/homeContext";

export type PrivateScreensParams = {
    Home: any,
    DetailsWord: {word: WordDetails},
}

const Stack = createNativeStackNavigator<PrivateScreensParams>();

const PrivateScreens: React.FC = () => {
    return (
        <HomeContextProvider>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="DetailsWord" component={DetailsWord} />
            </Stack.Navigator>
        </HomeContextProvider>
    )
}

export default PrivateScreens;