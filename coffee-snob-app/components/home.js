// import React, { useRef , useState} from 'react';
// import { Easing, Dimensions  } from "react-native";
// import {useSharedValue, useAnimatedStyle, withTiming, View as AnimatedView }from 'react-native-reanimated';
// import CafeList from './cafeList';
// import styles from '../AppStyles'
// import HeaderTitle from './HeaderTitle';

// const screenHeight = Dimensions.get('window').height;

// const Home = () => {
//     const scrollY = useRef(useSharedValue(0)).current;
//     const [prevScrollY , setPrevScrollY]= useState(0);
//     const [ headerVisible, setHeaderVisible] = useState(true);
    
//     const animatedValues = {
//         headerHeight: useAnimatedStyle(() => {
//             return {
//                 height: withTiming(headerVisible ? 90 : 0, { duration: 500, easing: Easing.linear }),
//             };
//         }),

//         translate: useAnimatedStyle(() => {
//             const translateY = withTiming(headerVisible ? 0 : 1, { duration: 500, easing: Easing.linear });
//             return {
//               transform: [{ translateY: translateY }],
//             };
//           }),
          

//         textOpacity: useAnimatedStyle(() => {
//             return {
//                 opacity: withTiming(headerVisible ? 1 : 0, { duration: 500, easing: Easing.linear }),
//             };
//         }),

//         headerColor: useAnimatedStyle(() => {
//             return {
//                 backgroundColor: withTiming(headerVisible ? 'white' : 'transparent', { duration: 500, easing: Easing.linear }),
//             };
//         }),
//     };
 
   
    

//     const handleScroll = (event) => {
//     const offsetY = event.nativeEvent.contentOffset.y;
//     const scrollVelocity = offsetY - prevScrollY;
//     if( scrollVelocity > 5 & offsetY > 5){
//         setHeaderVisible(false);
//     } else if (scrollVelocity < 0) {
//         setHeaderVisible(true);
//     }
//     setPrevScrollY(offsetY);
//     scrollY.value = offsetY;
// }; 

//    // Log imports
//    console.log('Imported CafeList:', CafeList);
//    console.log('Imported HeaderTitle:', HeaderTitle);
  
//     return (
//         <>
//         {headerVisible ?(
            
       
//         <AnimatedView style={[styles.header, { height: animatedValues.headerHeight ,  transform: [{ translateY: animatedValues.translate }]  }]}>
//           <HeaderTitle style={styles.headerTitle } opacity={animatedValues.textOpacity} color={animatedValues.headerColor}>
//            Coffee Snob.
//             </HeaderTitle>
//         </AnimatedView>
//         ) : null}
//         <CafeList onScroll={handleScroll} style={styles.feed} />
//        </>
//     );
// }

// export default Home;
import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import CafeList from './cafeList';
import HeaderTitle from './HeaderTitle';
import styles from '../AppStyles';

const Home = () => {


    const [headerVisible, setHeaderVisible] = useState(true);
    const prevScrollY = useRef(0);
  
    const handleScroll = (event) => {
      const offsetY = event.nativeEvent.contentOffset.y;
      const scrollVelocity = offsetY - prevScrollY.current;
      if (scrollVelocity > 5 && offsetY > 5) {
        setHeaderVisible(false);
      } else if (scrollVelocity < 0) {
        setHeaderVisible(true);
      }
      prevScrollY.current = offsetY;
    };



  return (
    
        <View style={styles.header}>
          <HeaderTitle style={styles.headerTitle}>Coffee Snob.</HeaderTitle>
          <CafeList onScroll={handleScroll} style={styles.feed} />
        </View>
        
      
    
   
  );
}

export default Home;
