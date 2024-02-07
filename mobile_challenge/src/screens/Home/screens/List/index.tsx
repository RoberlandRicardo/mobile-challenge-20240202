import { Text, View } from "react-native"
import { ListNavProps } from "./model"

const List: React.FC<ListNavProps> = ({navigation, route}: ListNavProps) => {
    return (
        <View>
            <Text style={{fontSize: 40}}>Word List</Text>
        </View>
    )
}

export default List;