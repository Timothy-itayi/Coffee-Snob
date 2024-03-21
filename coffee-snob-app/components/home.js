import {  React ,useState } from 'react';
import { Animated, Text } from 'react-native';
import CafeList from './cafeList';
import HeaderTitle from './HeaderTitle';
import styles from '../AppStyles';
import CafeFilter from './cafeFilter';


const Home = () => { 
    const [activeFilter , setActiveFilter] = useState();

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };
    
  return (
    <>
      <Animated.View
        style={[
          styles.header,
          {  zIndex:1},
        ]}
      >
        <HeaderTitle
          style={[
            styles.headerTitle,    
          ]}
        >
          <Text>Coffee Snob.</Text>
        </HeaderTitle>
        <CafeFilter activeFilter={activeFilter} onChangeFilter={handleFilterChange} />
      </Animated.View>

      <CafeList
       
        style={styles.feed}
      />
    </>
  );
};

export default Home;
