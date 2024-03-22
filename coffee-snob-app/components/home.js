import   React , {useState} from 'react';
import { Animated, Text, Dimensions, Easing } from 'react-native';
import CafeList from './cafeList';
import HeaderTitle from './HeaderTitle';
import styles from '../AppStyles';
import CafeFilter from './cafeFilter';
import {cafes} from '../data/CafeData';
import { useFilter } from './filterContext';

const Home = () => { 
 
  const { activeFilter , setActiveFilter } = useFilter();
  const [ scrollY ]= useState(new Animated.Value(0));
  const screenHeight = Dimensions.get('window').height;

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const headerHeight = scrollY.interpolate ({
    inputRange: [0 , screenHeight * .5 , screenHeight],
    outputRange: [90, 50, 0 ],
    extrapolate: 'clamp',
     easing: Easing.inOut(Easing.ease),
  });

  const translateY = scrollY.interpolate ({
    inputRange: [0 , screenHeight * 0.5 ,screenHeight ],
    outputRange: [0, -100, -200],
    extrapolate: 'clamp',
  });

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y : scrollY }}}],
    { useNativeDriver: false}
  );
  
  return (
    <>
      <Animated.View
        style={[
          styles.header,
          {  zIndex:1, transform: [{ translateY: translateY}]},
        ]}
      >
        <HeaderTitle
          style={[styles.headerTitle, {height: headerHeight}]}
        >
          <Text>Coffee Snob.</Text>
        </HeaderTitle>
        <CafeFilter activeFilter={activeFilter} onChangeFilter={handleFilterChange} />
      </Animated.View>

      <CafeList
       cafes={cafes}activeFilter={activeFilter}
       handleScroll={handleScroll}
        style={styles.feed}
      />
    </>
  );
};

export default Home;
