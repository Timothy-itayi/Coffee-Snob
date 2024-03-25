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


  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };


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
