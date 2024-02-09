import { StyleSheet } from "react-native"
import { BACKGROUND_COLOR, FONT_COLOR } from "../../../../styles/colors";

const useStylesFavorites = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: BACKGROUND_COLOR,
        },
    })
    
    return {
        styles
    }
}

export default useStylesFavorites;