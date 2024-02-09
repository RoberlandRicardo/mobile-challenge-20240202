import { StyleSheet } from "react-native"
import { FONT_COLOR } from "../../styles/colors";

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