
import React , {useEffect , useState } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar'
import Home  from './pages/home';
import  {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';
import styles from './AppStyles';
import SignUp from './authentication/signup'
import UserProfile from './pages/userprofile';
import analytics from '@react-native-firebase/analytics'; 
import {Ionicons} from '@expo/vector-icons';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


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

  useEffect(() => {
    // Initialize Firebase analytics when the app starts
    analytics().setAnalyticsCollectionEnabled(true);
  }, []);

  if (!fontsLoaded) {
    if( errorLoadingFonts){
      return <Text>Error loading fonts. Please try again later</Text>;
    }

    return null;
  }

  
  return (
  
<>
   <StatusBar style={styles.statusBar}/>
 
        <NavigationContainer >
          <Tab.Navigator
          screenOptions={({ route, focused}) => ({
           
            tabBarIcon: ({ color, size}) => {
              let iconName;

              if (route.name === 'Home'){
                iconName = focused ? 'home' : 'home-outline';
              } else if ( route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              } else if ( route.name === 'SignUp') {
                iconName = 'person-add'; 
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            }
          
           
          })}
         >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={UserProfile}/>
            <Tab.Screen name="SignUp" component={SignUp}/>
          </Tab.Navigator>
        </NavigationContainer>
    
</>

  );
}




