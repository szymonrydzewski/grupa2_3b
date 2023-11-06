import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PolishKing from './PolishKing';
import KingsList from './KingsList';

export default function App() {
  let kings = [
    {id:1, name:"Bolesław Chrobry", reignDate:"992-1025"},
    {id:2, name:"Mieszko II Lambert", reignDate:"1025-1031"},
    {id:3, name:"Bolesław Śmiały", reignDate:"1058-1079"},
    {id:4, name:"Przemysław II", reignDate:"1295-1206"},
  ]
  return (
    <View style={styles.container}>
      {/* <PolishKing name="Bolesław Chrobry"></PolishKing>
      <PolishKing name="Przemysław II"></PolishKing> */}
      <KingsList kingsList={kings}></KingsList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
