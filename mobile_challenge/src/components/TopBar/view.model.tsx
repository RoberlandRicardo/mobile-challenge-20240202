import { useEffect } from "react"
import { TopBarProps } from "./model"
import { useSharedValue, withTiming } from "react-native-reanimated";

const useViewModelTopBar = ({state}: TopBarProps) => {

    const fillAnimation = useSharedValue(0);

    return {
    }
}

export default useViewModelTopBar;