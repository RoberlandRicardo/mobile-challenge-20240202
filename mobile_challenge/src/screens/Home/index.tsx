import { View } from "react-native";
import { HomeNavProps, HomeTabNavProps } from "./model";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import List from "./screens/List";
import TopBar from "../../components/TopBar";
import History from "./screens/History";
import Favorites from "./screens/Favorites";
import HomeContextProvider from "./stores/homeContext";

const Tab = createMaterialTopTabNavigator<HomeTabNavProps>();

const HomeTabs: React.FC<HomeNavProps> = ({navigation, route}: HomeNavProps) => {
    return (
        <Tab.Navigator  tabBar={props => <TopBar {...props} />}>
            <Tab.Screen name="List" component={List} />
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
    )
}

const Home: React.FC<HomeNavProps> = (props: HomeNavProps) => {
    return (
        <HomeContextProvider>
            <HomeTabs {...props} />
        </HomeContextProvider>
    )
}

export default Home;