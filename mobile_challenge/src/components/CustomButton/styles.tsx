import { StyleSheet } from "react-native"
import { FONT_COLOR, YELLOW_COLOR } from "../../styles/colors";

const useStylesCustomButton = () => {

    const styles = StyleSheet.create({
        customButton: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
            minWidth: 120,
            borderRadius: 4,
            backgroundColor: YELLOW_COLOR,
            elevation: 4,
        }
    })
    
    return {
        styles
    }
}

export default useStylesCustomButton;