
import React from 'react';
import { StyleSheet,  View } from 'react-native';
import Home from './components/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        name="Home"
        component={Home}
        options={{
          headerStyle: styles.header,
          headerTitleStyle: styles.title,
          headerTransparent: true,
        }}

      </Stack.Navigator>

    </NavigationContainer>
  
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

