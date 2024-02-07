import { View } from "react-native";
import { HomeNavProps, HomeTabNavProps } from "./model";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import List from "./screens/List";

const Tab = createMaterialTopTabNavigator<HomeTabNavProps>();

const HomeTabs: React.FC<HomeNavProps> = ({navigation, route}: HomeNavProps) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="List" component={List} />
        </Tab.Navigator>
    )
}

const Home: React.FC<HomeNavProps> = (props: HomeNavProps) => {
    return (
        <HomeTabs {...props} />
    )
}

export default Home;