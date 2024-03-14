import 'react-native-gesture-handler';
import React from 'react';

import Home from './components/home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Coffee Snob"
        component={Home}
        options={{
         
          headerTransparent: true,
        }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  
  );
}



