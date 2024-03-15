
import React  from 'react';

import Home  from './components/home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {

  return (
   
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ cardStyle: {backgroundColor: '#A0522D'}}} >
        <Stack.Screen
        name="Coffee Snob"
        component={Home}
        options={{
         
          headerTransparent: false,
          headerShown: false,
          
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}



