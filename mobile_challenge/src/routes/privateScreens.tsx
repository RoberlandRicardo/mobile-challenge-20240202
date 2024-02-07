import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

export type PrivateScreensParams = {
    Home: any,
    DetailsWord: any,
}

const Stack = createNativeStackNavigator<PrivateScreensParams>();

const PrivateScreens: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default PrivateScreens;