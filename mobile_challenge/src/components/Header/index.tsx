import { Text, View } from "react-native";
import { HeaderProps } from "./model";
import useStylesHeader from "./styles";

export default function Header({title}: HeaderProps) {
    const { styles } = useStylesHeader();

    return (
        <View style={styles.containerTitleScreen}>
            <Text style={styles.titleScreen}>{title}</Text>
        </View>
    )
}