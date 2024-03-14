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

    const headerOpacity = diffClamp.interpolate({
        inputRange:[0 , 50],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });
  
    return (
        <>
        <Animated.View style={[styles.header, { height: headerHeight, opacity: headerOpacity }]}>
          <HeaderTitle style={styles.headerTitle}>Coffee Snob</HeaderTitle>
        </Animated.View>
        <CafeList scrollY={scrollY} />
      </>
    );
  }
