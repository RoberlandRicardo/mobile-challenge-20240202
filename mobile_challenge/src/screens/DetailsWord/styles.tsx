import { StyleSheet, Dimensions } from "react-native"
import { BACKGROUND_COLOR, COMPONENT_COLOR, FONT_ALTERNATIV_COLOR, FONT_COLOR, YELLOW_COLOR } from "../../styles/colors";

const useStylesDetailsWord = () => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: BACKGROUND_COLOR,
        },
        topBar: {
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: 20,
            paddingVertical: 16,
        },
        containerWord: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        word: {
            color: FONT_COLOR,
            fontSize:50,
            fontWeight: 'bold',
        },
        phonetic: {
            marginBottom: 20,
            color: FONT_ALTERNATIV_COLOR,
            fontSize:30,
        },
        containerButtonIcon: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 12,
            borderRadius: 100,
            backgroundColor: YELLOW_COLOR,
            elevation: 4,
        },
        titleMeanings: {
            color: FONT_COLOR,
            fontSize: 18,
            fontWeight: '600'
        },
        containerMeanings: {
            width: '100%',
            height: 200,
            marginBottom: 20,
        },
        containerItemMeaning: {
            marginHorizontal: 20,
            paddingHorizontal: 20,
            paddingVertical: 12,
            width: Dimensions.get('window').width - 40,
            borderRadius: 4,
            borderTopWidth: 0.4,
            borderBottomWidth: 4.5,
            borderLeftWidth: 1.2,
            borderRightWidth: 1.2,
            borderColor: 'rgba(0, 0, 0, 0.10)',
            backgroundColor: COMPONENT_COLOR,
        },
        containerActions: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 20,
            paddingVertical: 16,
        },
        textButton: {
            color: FONT_COLOR,
            fontSize: 16,
            fontWeight: '600',
        }
    })
    
    return {
        styles
    }
}

export default useStylesDetailsWord;