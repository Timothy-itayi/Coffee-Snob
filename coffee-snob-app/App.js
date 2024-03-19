
import React , {useEffect , useState } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar'
import Home  from './components/home';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';

const Stack = createStackNavigator();



registerRootComponent(App);
export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [errorLoadingFonts, setErrorLoadingFonts] = useState(false);

  useEffect(() => {
    async function loadFonts() {
     try {
      await Font.loadAsync({
        'MillikRegular': require('./assets/fonts/Millik.otf'),
      });
      setFontsLoaded(true);
     } catch (error) {

      console.error('Error loading fonts', error);
      setErrorLoadingFonts(true);
     }
      
    } 

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    if( errorLoadingFonts){
      return <Text>Error loading fonts. Please try again later</Text>;
    }

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



