
import React , {useEffect , useState } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar'
import Home  from './components/home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();




export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'MillikRegular': require('./assets/fonts/Millik.otf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {

    return null;
  }

  return (
   <>
   <StatusBar style="light" backgroundColor='white'/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ cardStyle: {backgroundColor: '#100F0F',}}} >
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
</>
  );
}



