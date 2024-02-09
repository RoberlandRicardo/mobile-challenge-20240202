import { StyleSheet } from "react-native"
import { COMPONENT_COLOR, FONT_COLOR, YELLOW_COLOR, } from "../../styles/colors"

const useStylesTopBar = () => {

    const styles = StyleSheet.create({
        containerTopBar: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: COMPONENT_COLOR,
            elevation: 5,
        },
        containerItemTopBar: {
            flex: 1,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
        },
        textItemTopBar: {
            fontSize: 18,
            fontWeight: 'bold',
        },
        fillAnimation: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            borderRadius: 8,
            backgroundColor: YELLOW_COLOR,
        }
    })
    
    return {
        styles
    }
}

export default useStylesTopBar;