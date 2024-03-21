
import React , {useEffect , useState } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar'
import Home  from './components/home';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';
import styles from './AppStyles'

const Stack = createStackNavigator();



registerRootComponent(App);
export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [errorLoadingFonts, setErrorLoadingFonts] = useState(false);

  useEffect(() => {
    async function loadFonts() {
     try {
      await Font.loadAsync({
        'Sling': require('./assets/fonts/Sling.ttf'),
        'SlingBold': require('./assets/fonts/SlingBold.ttf'),
        'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
        'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
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
   <StatusBar style={styles.StatusBar}/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ cardStyle: {backgroundColor: '#FFFDFC',}}} >
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



