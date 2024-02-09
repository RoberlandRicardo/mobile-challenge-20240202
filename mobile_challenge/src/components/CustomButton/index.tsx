import { Text, TouchableOpacity, View } from "react-native";
import { CustomButtonProps } from "./model";
import useStylesCustomButton from "./styles";

export default function CustomButton({style, ...rest}: CustomButtonProps) {

    const { styles } = useStylesCustomButton();

    return (
        <TouchableOpacity style={[
            styles.customButton,
            style
        ]} {...rest} >
            
        </TouchableOpacity>
    )
}