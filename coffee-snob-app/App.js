
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home';

export default function App() {
  return (
    <View style={styles.container}>
     <Home/>
     
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
      backgroundColor:'#A0522D',
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {wdith: 0 , height: 2},
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
  },
  title:{
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold'
}
});

