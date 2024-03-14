import React, { useRef } from 'react';
import { Animated } from "react-native";
import CafeList from './cafeList';
import styles from '../AppStyles'
import HeaderTitle from './HeaderTitle';


export default function Home() {
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClamp = Animated.diffClamp(scrollY, 0 , 50);
  
    const headerHeight = scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [100, 0],
      extrapolate: 'clamp',
    });

    const textOpacity = diffClamp.interpolate({
        inputRange:[0 , 50],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });
    const headerColor = diffClamp.interpolate({
        inputRange: [0, 50],
        outputRange: ['black', 'transparent'], 
        extrapolate: 'clamp',
      })
    return (
        <>
        <Animated.View style={[styles.header, { height: headerHeight,  }]}>
          <HeaderTitle style={styles.headerTitle} opacity={textOpacity} color={headerColor}>Coffee Snob</HeaderTitle>
        </Animated.View>
        <CafeList scrollY={scrollY} />
      </>
    );
  }
