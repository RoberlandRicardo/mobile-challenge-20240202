import { StyleSheet } from "react-native"
import { FONT_COLOR } from "../../styles/colors";

const useStylesItemWord = () => {

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingVertical: 18,
            paddingHorizontal: 22,
        },
        word: {
            color: FONT_COLOR,
            fontSize: 16,
        },
        containerButtonFav: {
            height: '100%',
            paddingHorizontal: 10,
        }
    })
    
    return {
        styles
    }
}

export default useStylesItemWord;