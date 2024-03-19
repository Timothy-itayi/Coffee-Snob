import React, { useRef , useState} from 'react';
import { Easing , Dimensions } from "react-native";
import {Animated as Reanimated }from 'react-native-reanimated';
import CafeList from './cafeList';
import styles from '../AppStyles'
import HeaderTitle from './HeaderTitle';

const screenHeight = Dimensions.get('window').height;

export default function Home() {
    const scrollY = useRef(new Reanimated.Value(0)).current;
    const diffClamp = Reanimated.diffClamp(scrollY, 0 , 100);
    const [prevScrollY , setPrevScrollY]= useState(0);
    const [ headerVisible, setHeaderVisible] = useState(0);
    
    const animatedValues = {
         headerHeight : scrollY.interpolate({
            inputRange: [0, screenHeight * .5 , screenHeight ],
            outputRange: [90,  headerVisible ? 50:0, 0],
            extrapolate: 'clamp',
      }),
   
        translate : scrollY.interpolate({
            inputRange: [0, screenHeight * 0.5 , screenHeight ],
            outputRange: [0, 1, -1],
            extrapolate: 'clamp',
      }),
        textOpacity : diffClamp.interpolate({
            inputRange:[0 , 50, 400 ],
            outputRange: [1, 1, 0],
            
            easing: Easing.inOut(Easing.ease),
      }),
        headerColor : scrollY.interpolate({
            inputRange: [0, 200],
            outputRange: ['white', 'transparent'], 
            
        }),
};
 
   
    const animationDuration = 5000; 

      const hideHeader = () => {
        Reanimated.timing(animatedValues.headerHeight,{
            toValue: 0,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => setHeaderVisible(false)),

        Reanimated.timing(animatedValues.translate,{
            toValue: 0,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(),

        Reanimated.timing(animatedValues.textOpacity,{
            toValue: 0,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(),

        Reanimated.timing(animatedValues.headerColor,{
            toValue: 0,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();

       };
    
       const showHeader = () => {
        setHeaderVisible(true);
        Reanimated.timing(animatedValues.headerHeight,{
            toValue: 1,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(),

        
        Reanimated.timing(animatedValues.translate,{
            toValue: 1,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(),

        
        Reanimated.timing(animatedValues.textOpacity,{
            toValue: 1,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(),

        
        Reanimated.timing(animatedValues.headerColor,{
            toValue: 1,
            duration: animationDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
       };
    

    const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const scrollVelocity = offsetY - prevScrollY;
    if( scrollVelocity > 5 & offsetY > 5) {
        
        
        hideHeader();
    } else if (scrollVelocity < 0){
     ;
        
        showHeader();
    }
    setPrevScrollY(offsetY)
   };

  
    return (
        <>
        {headerVisible ?(
            
       
        <Reanimated.View style={[styles.header, { height: animatedValues.headerHeight ,  transform: [{ translateY: animatedValues.translate }]  }]}>
          <HeaderTitle style={styles.headerTitle } opacity={animatedValues.textOpacity} color={animatedValues.headerColor}>
           Coffee Snob.
            </HeaderTitle>
        </Reanimated.View>
        ) : null}
        <CafeList onScroll={handleScroll} style={styles.feed} />
       </>
    );
    }
