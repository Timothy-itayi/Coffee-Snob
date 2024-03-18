import React, { useRef , useState} from 'react';
import { Animated,Easing , Dimensions } from "react-native";
import CafeList from './cafeList';
import styles from '../AppStyles'
import HeaderTitle from './HeaderTitle';

const screenHeight = Dimensions.get('window').height;

export default function Home() {
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClamp = Animated.diffClamp(scrollY, 0 , 100);
    const [prevScrollY , setPrevScrollY]= useState(0);
    const [headerVisible , setHeaderVisible] = useState(true);
  
    const headerHeight = scrollY.interpolate({
      inputRange: [0, screenHeight * .5 , screenHeight ],
      outputRange: [90,  headerVisible ? 50:0, 0],
   
    });
 
    const translate = scrollY.interpolate({
        inputRange: [0, screenHeight * 0.5 , screenHeight ],
        outputRange: [0, 1, -1],
        extrapolate: 'clamp',
    })
    const textOpacity = diffClamp.interpolate({
        inputRange:[0 , 50, 400 ],
        outputRange: [1, 1, 0],
        
        easing: Easing.inOut(Easing.ease),
    });
    const headerColor = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: ['white', 'transparent'], 
      
      })
       
    
      const hideHeader = () => {
        setHeaderVisible(false);
       };
    
       const showHeader = () => {
        setHeaderVisible(true);
       };
    

   const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const scrollVelocity = offsetY - prevScrollY;
    if( scrollVelocity > 5 && offsetY > 5) {
        
        hideHeader();
    } else if (scrollVelocity < 0){
        
        showHeader();
    }
    setPrevScrollY(offsetY)
   };

  
    return (
        <>
        {headerVisible && (
            
       
        <Animated.View style={[styles.header, { height: headerHeight ,  transform: [{ translateY: translate }] }]}>
          <HeaderTitle style={styles.headerTitle } opacity={textOpacity} color={headerColor}>Coffee Snob.</HeaderTitle>
        </Animated.View>
        )}
        <CafeList onScroll={handleScroll} style={styles.feed} />
       </>
    );
    }
