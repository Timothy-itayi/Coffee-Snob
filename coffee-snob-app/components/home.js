import   React  from 'react';
import { Animated, Text } from 'react-native';
import CafeList from './cafeList';
import HeaderTitle from './HeaderTitle';
import styles from '../AppStyles';
import CafeFilter from './cafeFilter';
import {cafes} from '../data/CafeData';
import { useFilter } from './filterContext';

const Home = () => { 
 
  const { activeFilter , setActiveFilter } = useFilter();
  // const [ scrollY ]= useState(new Animated.Value(0));
  // const screenHeight = Dimensions.get('window').height;

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // const headerHeight = scrollY.interpolate ({
  //   inputRange: [0 , screenHeight * .5 , screenHeight  ],
  //   outputRange: [HeaderTitle,150, StatusBar.currentHeight],
  //   extrapolate: 'clamp',
  //   easing: Easing.easeInOut,
  // });

  // const translate = scrollY.interpolate ({
  //   inputRange: [0 , screenHeight * .5 , screenHeight ],
  //   outputRange: [0, -120, StatusBar.currentHeight - screenHeight + 120 ],
  //   extrapolate: 'clamp',

    
  // });

  // const handleScroll = Animated.event(
  //   [{ nativeEvent: { contentOffset: { y : scrollY }}}],
  //   { useNativeDriver: false}
  // );

  return (
    <>
      <Animated.View
        style={styles.headerContainer}
      >
        <HeaderTitle
         
        >
          <Text style={styles.headerText}>Coffee Snob.</Text>
        </HeaderTitle>
        <CafeFilter activeFilter={activeFilter} onChangeFilter={handleFilterChange} />
      </Animated.View>

      <CafeList
       cafes={cafes}activeFilter={activeFilter}

        style={styles.feed}
   
      />
    </>
  );
};

export default Home;
