import { Text, TouchableWithoutFeedback, View } from "react-native";
import { TopBarProps } from "./model";
import useStylesTopBar from "./styles";
import Animated, { ZoomIn, ZoomInDown, ZoomOut } from "react-native-reanimated";
import useViewModelTopBar from "./view.model";
import { BLUE_COLOR, COMPONENT_COLOR, DISABLED_COLOR, FONT_COLOR, GREEN_COLOR, YELLOW_COLOR } from "../../styles/colors";

export default function TopBar({state, navigation, ...rest}: TopBarProps) {

    const { styles } = useStylesTopBar();

    const { } = useViewModelTopBar({state, navigation, ...rest});

    return (
        <View style={styles.containerTopBar}>
            {state.routeNames.map((route, index) => {

                const label = route;

                return (
                    <TouchableWithoutFeedback key={`TAB_ITEM_${route}`}
                    onPress={() => {
                        navigation.navigate(route);
                    }}>
                        <View 
                            style={styles.containerItemTopBar}>
                            {state.index == index &&
                            <Animated.View 
                            entering={ZoomIn.duration(600)}
                            exiting={ZoomOut.duration(600)}
                            style={[
                                styles.fillAnimation,
                            ]} />}
                            <Text style={[
                                styles.textItemTopBar,
                                {
                                    color: state.index == index ? FONT_COLOR : DISABLED_COLOR
                                }
                            ]}>
                                {label}
                            </Text>
                            
                        </View>
                    </TouchableWithoutFeedback>
                )
            })}
        </View>
    )
}