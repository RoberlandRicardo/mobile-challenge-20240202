import { StyleSheet } from "react-native"
import { FONT_COLOR } from "../../styles/colors";

const useStylesHeader = () => {

    const styles = StyleSheet.create({
        containerTitleScreen: {
            width: '100%',
            paddingVertical: 16,
            paddingHorizontal: 24,
        },
        titleScreen: {
            color: FONT_COLOR,
            fontSize: 28,
            fontWeight: 'bold',
        }
    })
    
    return {
        styles
    }
}

export default useStylesHeader;