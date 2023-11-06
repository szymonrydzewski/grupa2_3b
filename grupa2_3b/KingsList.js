import {Text, View} from 'react-native';

const KingsList = ({kingsList}) => {
    const {id, name, reignDate} = kingsList[0]
    return(
        <View>
            <Text>{id}, {name}, {reignDate}</Text>
        </View>
    )
}
export default KingsList