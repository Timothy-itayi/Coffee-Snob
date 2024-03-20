import React, { useRef } from 'react';
import { Dimensions, Animated, Easing } from 'react-native';
import CafeList from './cafeList';
import HeaderTitle from './HeaderTitle';
import styles from '../AppStyles';

const screenHeight = Dimensions.get('window').height;

const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, screenHeight * .5 , screenHeight ],
    outputRange: [50,90, 0],
    extrapolate: 'clamp',
  });

  const translate = scrollY.interpolate({
    inputRange: [0, screenHeight * 0.5 , screenHeight ],
    outputRange: [0, 1, -1],
    extrapolate: 'clamp',
  });

  const textOpacity = scrollY.interpolate({
    inputRange:[0 , 50, 400 ],
    outputRange: [1, 1, 0],
    easing: Easing.inOut(Easing.ease),
    extrapolate: 'clamp',
  });

  const headerColor = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: ['white', 'transparent'], 
  });

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false}
  );

  return (
    <>
      <Animated.View
        style={[
          styles.header,
          { height: headerHeight, backgroundColor: headerColor, zIndex:1, transfor: [{ translateY: translate}] },
        ]}
      >
        <HeaderTitle
          style={[
            styles.headerTitle,
            {
              opacity: textOpacity,
              
            },
          ]}
        >
          Coffee Snob.
        </HeaderTitle>
      </Animated.View>

      <CafeList
        onScroll={handleScroll}
        style={styles.feed}
      />
    </>
  );
};

export default Home;
