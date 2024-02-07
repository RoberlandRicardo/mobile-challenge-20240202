import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PrivateScreensParams } from "../../routes/privateScreens";

export type HomeTabNavProps = {
    List: any,
    History: any,
    Favorites: any,
}

export type HomeNavProps = NativeStackScreenProps<PrivateScreensParams, 'Home'>