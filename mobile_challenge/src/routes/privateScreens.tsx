import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import DetailsWord from "../screens/DetailsWord";
import { WordDetails } from "../@types/entities";

export type PrivateScreensParams = {
    Home: any,
    DetailsWord: {word: WordDetails},
}

const Stack = createNativeStackNavigator<PrivateScreensParams>();

const PrivateScreens: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DetailsWord" component={DetailsWord} />
        </Stack.Navigator>
    )
}

export default PrivateScreens;