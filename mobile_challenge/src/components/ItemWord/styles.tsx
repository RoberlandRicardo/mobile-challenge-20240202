import { StyleSheet } from "react-native"
import { FONT_ALTERNATIV_COLOR, FONT_COLOR } from "../../styles/colors";

const useStylesItemWord = () => {

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingVertical: 8,
            paddingHorizontal: 22,
        },
        word: {
            color: FONT_COLOR,
            fontSize: 16,
        },
        dateAccess: {
            height: 30,
            color: FONT_ALTERNATIV_COLOR,
        },
        containerButtonFav: {
            height: '100%',
            paddingHorizontal: 10,
            paddingVertical: 10,
        }
    })
    
    return {
        styles
    }
}

export default useStylesItemWord;